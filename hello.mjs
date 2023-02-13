import aws from 'aws-sdk';

const lambda = new aws.Lambda({
    region: "ap-northeast-3",
    apiVersion: '2015-03-31',
    endpoint: "http://localhost:3002" // 填上 Serverless Offline 的路徑
});

(async () => {
    const params = {
        FunctionName: 'hello-lambda-dev-function1', // 填上 Serverless Offline 上生成的完整 function 名稱
        InvocationType: 'RequestResponse',
    };

    const response = await lambda.invoke(params).promise();

    console.log(JSON.stringify(response));
})();