# Construindo Encurtador de URL

## Bootcamp "Eduzz Fullstack Developer #2" - Digital Innovation One

Projeto desenvolvido com instruções de [Alexia Pereira] na trilha de estudo do Bootcamp "Eduzz Fullstack Developer #2" da [dio.me].

<p align="center">
	<img alt="Repository language count" src="https://img.shields.io/github/languages/count/didifive/url-shortener-dio">
	<a href="https://www.linkedin.com/in/alexiapereira/">
		<img alt="Made by Alexia" src="https://img.shields.io/badge/made%20by-Alexia-blue">
	</a>
	<a href="https://www.linkedin.com/in/luis-carlos-zancanela/">
		<img alt="Update by Didi" src="https://img.shields.io/badge/update%20by-Didi-green">
	</a>
	<a href="https://github.com/didifive/url-shortener-dio/commits/master">
		<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/didifive/url-shortener-dio?color=blue">
	</a>
	<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue">
</p>

<p align="center">
  <a href="https://nodejs.org/">
	  <img alt="Node.js" src="https://img.shields.io/static/v1?color=green&label=Dev&message=NodeJS&style=for-the-badge&logo=Node.js">
	</a>
  <a href="https://www.typescriptlang.org/">
	  <img alt="TypeScript" src="https://img.shields.io/static/v1?color=blue&label=Dev&message=TypeScript&style=for-the-badge&logo=TypeScript">
	</a>
</p>

Link da base utilizada neste projeto: [alexiadorneles/url-shortener-dio].

---

### Rodando o projeto

- `npm install`
- `npm run dev` //para rodar versão de desenvolvimento
- `npm run build` // para rodar build e versão de produção


Para configurar seu banco de dados MongoDB, basta atualizar a variável de ambiente `MONGO_STRING_CONN` que está no arquivo `.env` com sua *string connection*. A string normalmente é fornecida pelo provedor de serviço do banco de dados.


---

Abaixo seguem modificações feitas em relação ao projeto base:
* Criado o método `list` para listar todas as URLs já encurtadas pela aplicação, utilizando o endpoint `GET /`;
* Criado arquivo `.env` com variável `MONGO_STRING_CONN` para guardar a string de conexão ao banco, a URL e a porta que a aplicação utilizará;
* Criado o arquivo `.env.example` como exemplo (template) do arquivo `.env` visto que este não ficará disponível no repositório remoto (GitHub).


---

Endpoints da API:
* Encurtar URL: `POST /shorten`, com o JSON:
```json
{ 
    "originURL": "https://exampleurl.com"
}
```
* Listar todas as URLs já encurtadas: `GET /`
* Recuperar/Redirecionar para URL original: `GET /{hash}`


---

Links Interessantes:  

- [Node.js]
- [TypeScript]
- [MongoDB]


[dio.me]: https://dio.me/
[Alexia Pereira]: https://www.linkedin.com/in/alexiapereira/
[alexiadorneles/url-shortener-dio]: https://github.com/alexiadorneles/url-shortener-dio
[didifive/url-shortener-dio]: https://github.com/didifive/url-shortener-dio
[TypeScript]: https://www.typescriptlang.org/
[Node.js]: https://nodejs.org/
[MongoDB]: https://cloud.mongodb.com/