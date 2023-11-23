# agri-backend
to run migrations execute in order of dependancy
npx sequelize-cli db:migrate --name 20231118184927-create_address
npx sequelize-cli db:migrate --name 20231118183710-user
npx sequelize-cli db:migrate --name 20231118184809-create_vendor
npx sequelize-cli db:migrate --name 20231118184707-create_plans
npx sequelize-cli db:migrate
