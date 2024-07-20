-- Create the users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Create the todo_list table with a foreign key referencing users.id
CREATE TABLE todo_lists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  task VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
