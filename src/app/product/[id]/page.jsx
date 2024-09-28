import React from 'react'

const sampleData = [
  {
    id: 1,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '1.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 2,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '2.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 3,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '1.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 4,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '2.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 5,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '1.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 6,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '2.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 7,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '1.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 8,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '2.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 9,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '1.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 10,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '2.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 11,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '1.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 12,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '2.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  }


];

export default function ProductDetailPage({ params }) {
  const id = parseInt(params.id); // แปลง id จาก params เป็นตัวเลข
  const product = sampleData.find((item) => item.id === id); // ค้นหาสินค้าที่มี id ตรงกับ params.id

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h1>ไม่พบสินค้าที่คุณต้องการดู</h1>
        <p>กรุณากลับไปหน้ารายการสินค้าและเลือกสินค้าที่ต้องการดูใหม่</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card mb-3">
        {/* แสดงรูปภาพสินค้า */}
        <img
          src={`https://tennyr10.com/img/img/${product.img}`}
          className="imgphone"
          alt={product.name}
          
        />
        <div className="card-body">
          {/* แสดงรายละเอียดสินค้า */}
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text text-success">ราคา: {product.price} บาท</p>
          <p className="card-text">{product.content}</p>
          <p className="card-text">
            <small className="text-muted">สินค้าชิ้นนี้มีจำกัด รีบสั่งซื้อก่อนสินค้าหมด!</small>
          </p>
          {/* ปุ่มสั่งซื้อ */}
          <a href="#" className="btn btn-primary">
            สั่งซื้อทันที!
          </a>
        </div>
      </div>
    </div>
  );
}
