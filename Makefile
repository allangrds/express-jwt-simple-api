start: down kill up migrate

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up

bash:
	@docker exec -it sandbox-app /bin/ash

migrate:
	@docker exec -it sandbox-app cd /usr/app && npx sequelize db:migrate

seed:
	@docker exec -it sandbox-app cd /usr/app && npx sequelize-cli db:seed:all