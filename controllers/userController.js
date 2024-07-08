let users = [];

const createUser = (req, res) => {
  const { id, username, age, email, password } = req.body;
  users.push({ id, username, age, email, password });
  res.status(201).send('User created');
};

const getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);
  if (user) {
    const { email, password, ...userWithoutSensitiveInfo } = user;
    res.json(userWithoutSensitiveInfo);
  } else {
    res.status(404).send('User not found');
  }
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { id, ...updateData } = req.body;
  let user = users.find(u => u.id === userId);
  if (user) {
    user = { ...user, ...updateData };
    users = users.map(u => u.id === userId ? user : u);
    res.send('User updated');
  } else {
    res.status(404).send('User not found');
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser
};
