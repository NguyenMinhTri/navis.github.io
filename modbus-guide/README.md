# NAVIS Modbus Guide - Modular Structure

## Cấu trúc thư mục:

```
docs/modbus-guide/
├── index.html          # File chính (kết hợp các sections)
├── styles.css          # CSS dùng chung
├── images/             # Logo, hình ảnh
│   └── navis-logo.png  # Thêm logo vào đây
└── sections/           # Các section riêng lẻ
    ├── 01-getting-started.html      # 6 bước bắt đầu
    ├── 02-internet-connection.html  # Kết nối WiFi/4G
    ├── example-sensor.html          # Ví dụ SENSOR
    ├── example-setting.html         # Ví dụ SETTING
    ├── example-coil.html            # Ví dụ COIL
    ├── example-alarm.html           # Ví dụ ALARM
    ├── address-table.html           # Bảng quy đổi địa chỉ
    └── troubleshooting.html         # Xử lý sự cố
```

## Cách sử dụng:

### 1. Xem nhanh (offline)
Mở trực tiếp `index.html` trong browser - nội dung sẽ tự động load từ các file sections.

### 2. Chỉnh sửa từng phần
- Mở file trong `sections/` cần sửa
- CSS chung nằm ở `styles.css`
- Không cần sửa file chính

### 3. Build file hoàn chỉnh
Nếu cần 1 file HTML duy nhất (ví dụ để gửi email), copy nội dung các sections vào index.html.

### 4. Thêm section mới
1. Tạo file mới trong `sections/`, ví dụ: `example-new.html`
2. Thêm div vào `index.html`:
   ```html
   <div id="section-new"></div>
   ```
3. Thêm vào array `sections` trong script của index.html

## Các file section hiện có:

| File | Mô tả | Khi nào cần sửa |
|------|-------|-----------------|
| `01-getting-started.html` | 6 bước mua/tải/scan/đấu dây | Thêm bước mới |
| `02-internet-connection.html` | LED, CONFIG, SmartConfig | Đổi giao diện WiFi |
| `example-sensor.html` | Form + Dashboard SENSOR | Thêm ví dụ sensor khác |
| `example-setting.html` | Form + Dashboard SETTING | Thêm setting khác |
| `example-coil.html` | Form + Dashboard COIL | Thêm coil khác |
| `example-alarm.html` | Form + Dashboard ALARM | Thêm alarm khác |
| `address-table.html` | Bảng quy đổi PLC | Thêm PLC mới (Omron, ABB...) |
| `troubleshooting.html` | Xử lý sự cố | Thêm lỗi mới |

## Lưu ý:
- Giữ CSS trong `styles.css` để các section đồng bộ
- Nếu cần CSS riêng cho 1 section, dùng `<style>` inline trong file đó
- Logo cần copy vào `images/navis-logo.png`
