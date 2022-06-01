INSERT INTO department (name)
VALUES
  ('Front-End'),
  ('Back-End'),
  ('Full-Stack'),
  ('Design Concept');

INSERT INTO role (title, salary, department_id)
VALUES
  ('CSS Expert', 60000, 1),
  ('MongoDB Pro', 70000, 2),
  ('React Lord', 125000, 3),
  ('Graphic Designer', 22000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Francis', 'Bacon', 1, NULL),
('John', 'Hammer', 2, NULL),
('Wrest', 'Plague', 3, NULL),
('Cornelius', 'Vanderbilt', 4, NULL);