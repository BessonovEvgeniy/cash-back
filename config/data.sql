----
INSERT INTO roles (id, name, title, description)
VALUES
  (uuid_generate_v4(), 'admin', 'Admin', 'Admin'),
  (uuid_generate_v4(), 'bank', 'Bank', 'Bank'),
  (uuid_generate_v4(), 'client', 'Client', 'Client');


----
INSERT INTO
  users (id, role_id , email, password)
  SELECT
    uuid_generate_v4(),
    roles.id,
    'admin@admin.com',
    '$2a$10$lOx7UNUWmZm96Ik5qxIU4e0TnEVxEX34JdrQJOPibe51aoSoazOnS' /* password = test */
  FROM
    roles  AS roles
  WHERE
    roles.name = 'admin';

----
INSERT INTO
  clients (id, user_id)
  SELECT
    uuid_generate_v4(),
    users.id
  FROM
    users AS users
  WHERE
    users.email = 'admin@admin.com';

----
-- SELECT c.id FROM clients AS c INNER JOIN users AS u ON c.user_id = u.id WHERE u.email = 'admin@admin.com';
INSERT INTO
  credits (id, client_id)
    SELECT
      uuid_generate_v4(),
      clients.id
    FROM
      clients AS clients
    INNER JOIN
      users AS users ON clients.user_id = users.id
    WHERE users.email = 'admin@admin.com';

