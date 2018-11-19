export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "first-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://dspme7dcta.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_kG5m5dYJl",
        APP_CLIENT_ID: "6itq7ko27mvpbfm2sa765kd5fo",
        IDENTITY_POOL_ID: "us-east-2:5bbc85b3-1ef7-4009-9c3b-9ac556eeb6e1"
    }
};