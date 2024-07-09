<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/x-icon" href="https://static.wixstatic.com/media/877939_5d2aa84ff190450291170d79060213f5~mv2.png">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }

        .container {
            text-align: center;
            background-color: #fff;
            padding: 50px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        .animation {
            margin: 20px auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #4CAF50;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            animation: bounce 2s infinite;
        }

        .animation:before {
            content: '✔';
            font-size: 2.5em;
            color: #fff;
            animation: fadeIn 1s forwards;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        button {
            margin-top: 30px;
            padding: 10px 20px;
            font-size: 1em;
            color: #fff;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Message Sent!</h1>
        <div class="animation"></div>
        <button onclick="window.location.href='index.html';">Redirect to Home Page</button>
    </div>
</body>
</html>
