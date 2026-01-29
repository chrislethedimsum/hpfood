'use client'
import { useState } from "react";
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    content: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Hiển thị popup loading
    Swal.fire({
      title: 'Đang xử lý...',
      text: 'Vui lòng chờ một chút...',
      icon: 'info',
      showConfirmButton: false,  // Không hiển thị nút OK
      allowOutsideClick: false,  // Không cho phép click bên ngoài để đóng
      willOpen: () => {
        Swal.showLoading();  // Hiển thị spinner loading
      },
    });

    try {
      const response = await fetch('/contact/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        // Hiển thị thông báo thành công
        Swal.fire({
          title: 'Thành công!',
          text: 'Email của bạn đã được gửi đi.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        const responseData = await response.json();
        setStatus(`Failed to send email. ${responseData.message}`);
        // Hiển thị thông báo lỗi
        Swal.fire({
          title: 'Lỗi!',
          text: `Không thể gửi email. ${responseData.message}`,
          icon: 'error',
          confirmButtonText: 'Thử lại',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email.');
      // Hiển thị thông báo lỗi khi có lỗi bất ngờ
      Swal.fire({
        title: 'Lỗi!',
        text: 'Đã có sự cố trong quá trình gửi email. Vui lòng thử lại sau.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST" acceptCharset="UTF-8">
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Tên đầy đủ *"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Email *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Điện thoại"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Địa chỉ"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Tiêu đề"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows={4}
          placeholder="Nội dung *"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-danger">Gửi</button>
    </form>
  );
}
