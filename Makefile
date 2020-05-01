start: down kill up migrate seed

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up

bash:
	@docker exec -it sandbox-app /bin/ash

migrate:
	@docker exec -it sandbox-app npx sequelize db:migrate

seed:
	@docker exec -it sandbox-app npx sequelize-cli db:seed:all
