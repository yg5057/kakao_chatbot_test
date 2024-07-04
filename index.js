const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/skill', (req, res) => {
    const userRequest = req.body.userRequest;
    const userInput = userRequest.utterance;

    let responseText = "알 수 없는 요청입니다.";

    if (userInput.includes("안녕")) {
        responseText = "안녕하세요! 무엇을 도와드릴까요?";
    }

    res.json({
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: responseText
                    }
                }
            ]
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
