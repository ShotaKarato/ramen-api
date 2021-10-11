-- Create a database
CREATE DATABASE ramen;
-- Create a table
-- *Payment: 1. cash only, 2.cash and credit card
CREATE TABLE ramen_yokohama(
  id SERIAL NOT NULL,
  shop_name_jp VARCHAR(100) NOT NULL,
  shop_name_en VARCHAR(100) NOT NULL,
  shop_location VARCHAR(255) NOT NULL,
  payment_method INT NOT NULL,
  shop_rank INT NOT NULL
);
-- Insert data into the table
INSERT INTO ramen_yokohama(shop_name_jp, shop_name_en, shop_location, payment_method, shop_rank)
VALUES('櫻井中華そば店', 'Sakurai Chukasoba-ten', '神奈川県横浜市保土ケ谷区岩井町53 稲村ビル 1F', 1, 1),
('らぁ麺 すぎ本', 'Ramen Sugimoto', '神奈川県横浜市青葉区桜台26-1 第3アサキビル 1F', 1, 2),
('中華そば 高野', 'Chukasoba Takano', '神奈川県横浜市神奈川区大口通135-11', 1, 3),
('家系ラーメン とらきち家', 'Torakichi-ya', '神奈川県横浜市神奈川区西神奈川3-1-1', 1, 4),
('麺処 秋もと', 'Mendokoro Akimoto', '神奈川県横浜市青葉区市ヶ尾町1157-1 東急ドエル市ヶ尾アネックスビル 1F', 1, 5),
('支那蕎麦屋 藤花', 'Sinasoba-ya Touka', '神奈川県横浜市都筑区池辺町4800-6', 1, 6),
('中華そば 笑歩', 'Chukasoba Efu', '神奈川県横浜市港北区綱島西3-22-14', 1, 7),
('丿貫 福富町本店', 'Hechikan', '神奈川県横浜市中区福富町仲通2-4', 1, 8),
('川の先の上', 'Kawanosakinoue', '神奈川県横浜市港南区大久保1-15-36 第1ミツワセンター 2F', 1, 9),
('家系総本山 吉村家', 'Yoshimura-ya', '神奈川県横浜市西区南幸2-12-6 ストークミキ　１Ｆ', 1, 10);