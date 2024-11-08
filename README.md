## Hướng Dẫn Thiết Lập Cơ Sở Dữ liệu

### 1. Tạo file `.env` để lưu thông tin kết nối Database

Trước khi bắt đầu, cần phải tạo một file `.env` trong thư mục gốc của dự án để lưu thông tin kết nối đến cơ sở dữ liệu.

```ini
DB_HOST=localhost
DB_USER=<POSTGRES_USER>
DB_PASSWORD=<POSTGRES_PASSWORD>
DB_NAME=<POSTGRES_DB>
DB_PORT=5050
```

Lưu ý: Thay `<POSTGRES_USER>`, `<POSTGRES_PASSWORD>`, và `<POSTGRES_DB>` bằng các giá trị thực tế từ file `docker-compose.yml`.

---

### 2. Sử dụng Docker

Đảm bảo Docker đã được [cài đặt](https://docs.docker.com/desktop/setup/install/windows-install/). Sau khi đã cài đặt Docker, thực hiện các bước sau:

#### Bước 1: Mở Docker
- Mở Docker Desktop hoặc ứng dụng Docker của bạn để đảm bảo Docker đang hoạt động.

#### Bước 2: Khởi chạy Docker Compose
- Mở Terminal trong thư mục gốc của dự án và chạy lệnh sau để khởi động các container được định nghĩa trong `docker-compose.yml`:

```bash
docker-compose up -d
```

Lệnh này sẽ tải và khởi động các container Docker trong chế độ nền.

---

### 3. Tạo Migration

Để tạo một migration mới để thêm bảng hoặc thay đổi cấu trúc cơ sở dữ liệu, có thể thực hiện theo các bước sau.

#### 3.1 Tạo Migration File

Để tạo migration cho bảng `menu_items`, chạy lệnh sau trong Terminal:

```bash
npx knex migrate:make create_menu_items
```

Lệnh này sẽ tạo một file migration mới trong thư mục `migrations/` với tên tương tự như `xxxx_create_menu_items.js`.

#### 3.2 Định nghĩa bảng `menu_items` trong file Migration

Mở file migration vừa tạo trong thư mục `migrations/` và thêm mã sau để định nghĩa bảng `menu_items` với các trường `id`, `name`, `sellPrice`, `capitalPrice`, và `categoryId` theo chuẩn camelCase:

```js
exports.up = function(knex) {
  return knex.schema.createTable('menu_items', function(table) {
    table.increments('id').primary();           // Tạo cột 'id' làm primary key
    table.string('name').notNullable();         // Tạo cột 'name' và không cho phép giá trị null
    table.float('sellPrice').notNullable();     // Tạo cột 'sellPrice' và không cho phép giá trị null
    table.float('capitalPrice').notNullable();  // Tạo cột 'capitalPrice' và không cho phép giá trị null
    table.integer('categoryId').notNullable();  // Tạo cột 'categoryId' và không cho phép giá trị null
    table.timestamps(true, true);               // Tạo các cột 'created_at' và 'updated_at'
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('menu_items');   // Xóa bảng 'menu' nếu rollback
};
```

#### 3.3 Chạy Migration

Sau khi đã tạo và định nghĩa bảng, cần chạy migration để thực thi thay đổi và tạo bảng `menu_items` trong cơ sở dữ liệu:

```bash
npx knex migrate:latest
```

Lệnh này sẽ tạo bảng `menu_items` trong cơ sở dữ liệu.

---

### 4. Tạo và chạy seed data

Nếu muốn thêm dữ liệu mẫu vào bảng `menu_items`, có thể thực hiện các bước sau:

#### 4.1 Tạo seed file

Để tạo seed file cho bảng `menu_items`, chạy lệnh sau:

```bash
npx knex seed:make seed_menu_items
```

Lệnh này sẽ tạo một file seed mới trong thư mục `seeds/` với tên tương tự như `xxxx_seed_menu_items.js`.

#### 4.2 Thêm dữ liệu mẫu vào seed file

Mở file seed vừa tạo trong thư mục `seeds/` và thêm mã sau để chèn dữ liệu mẫu vào bảng `menu_items` với các trường đã sử dụng chuẩn camelCase:

```js
exports.seed = function(knex) {
  return knex('menu_items').del()         // Xóa tất cả dữ liệu trong bảng 'menu_items' trước khi thêm mới
    .then(function () {
      return knex('menu_items').insert([  // Chèn dữ liệu mẫu vào bảng 'menu_items'
        { name: 'Latte', sellPrice: 9.99, capitalPrice: 4.50, categoryId: 1 },
        { name: 'Americano', sellPrice: 12.99, capitalPrice: 6.00, categoryId: 2 },
        { name: 'Cappuccino', sellPrice: 7.99, capitalPrice: 3.50, categoryId: 3 },
      ]);
    });
};
```

#### 4.3 Chạy seed file

Sau khi đã tạo xong seed file, có thể chạy lệnh sau để thêm dữ liệu mẫu vào bảng `menu_items`:

```bash
npx knex seed:run
```

Lệnh này sẽ thực thi seed file và thêm dữ liệu mẫu vào cơ sở dữ liệu.

---

### 5. Kiểm tra

Có thể kiểm tra lại dữ liệu đã được thêm vào bảng bằng cách sửa đổi mã nguồn ở file `app.js` và chạy ứng dụng bằng cách sử dụng lệnh sau:

```bash
node app.js
```

Lệnh này sẽ khởi động ứng dụng Node.js, có thể kiểm tra xem các thay đổi đã được áp dụng thành công hay chưa trên [localhost:3000/menu_items](localhost:3000/menu_items).