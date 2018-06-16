
## Laravel React App

Laravel is a web application framework with expressive, elegant syntax.

React is a JavaScript library for building user interfaces.

## App Documentation
-[Description]
-[Installation]
-[Setup]
	-[Connect React frontend to Laravel backend]
		-[Frontend]
		-[Backend]
	-[Running the app]
		-[Frontend]
		-[Backend]

## Description

* `Laravel Framework` is used to build **the backend** of the app.
* `React Library` is used to build the **frontend** of the app.

## Installation

* Install Laravel Via **Composer Create-Project** as such `composer create-project --prefer-dist laravel/laravel laravel-react-app`.
* Install react from within **laravel-react-app** root dir Via `create-react-app` which is a global command-line utility that you use to create new projects as such `create-react-app frontend`.

## Setup

### `Connect React frontend to Laravel backend`

#### `Frontend`

Add this line of code to your package.json file `"proxy": "http://localhost:8000/"` to make a connection between the backend server running at port: **8000**.

#### `Backend`

To avoid running into `CORS Security issue` e.g ```No 'Access-Control-Allow-Origin' header is present on the requested resource.``` caused by a browser making a request to the backend which is in turn another domain, do the following;
* Install **laravel-cors** CORs package as such `composer require "barryvdh/laravel-cors"`
  -Add the **Cors\ServiceProvider** to **config/app.php** provider's array as such `Barryvdh\Cors\ServiceProvider::class`
* To allow CORS for all your routes, add the HandleCors middleware in the $middleware property of app/Http/Kernel.php class as such `\Barryvdh\Cors\HandleCors::class`
* Now publish the config using the command `php artisan vendor:publish --provider="Barryvdh\Cors\ServiceProvider"`

## Running the app

### Frontend
	
From the app's **frontend dir**

	`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

	`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Backend

From the app's **root dir**, run

	`php artisan serve`


Boom!!!!! App ready to go.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
