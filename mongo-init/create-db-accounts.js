db = db.getSiblingDB('admin');
db.auth(
  "admin",
  "password"
);
db = db.getSiblingDB('accounts');
db.createUser({
  user: 'admin',
  pwd: 'password',
  roles: [{ role: 'readWrite', db: 'accounts' }]
});
db.accounts.insert({
  name: "João Duarte",
  email: "joao.duarte@gmail.com",
  phone: "11976545678",
  accountId: UUID()
});
db = db.getSiblingDB('completations');
