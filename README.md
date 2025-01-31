## 新しく作ったファイルに書き込み出来ないとき
sudo chmod -R o+w .

npm install -g @aws-amplify/cli

amplify init
- IAMユーザ作っておく必要あり
- IDとsecretkeyいる
```
{
  "whyContinueWithGen1": "Prefer not to answer",
  "projectName": "athome",
  "version": "3.1",
  "frontend": "javascript",
  "javascript": {
    "framework": "react",
    "config": {
      "SourceDir": "src",
      "DistributionDir": "dist",
      "BuildCommand": "npm run build",
      "StartCommand": "npm run dev"
    }
  },
  "providers": [
    "awscloudformation"
  ]
}
```

amplify pull --appId doqtbuav81vim --envName dev

amplify push

## Amplifyのコンソールにプロジェクトが浮かんでくる
## 
## 信頼されたエンティティ
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "amplify.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```

## API設定
amplify configure
amplify init
amplify add api
amplify add storage
amplify push

## importの時の注意！
import { API } from 'aws-amplify';
import { graphqlOperation } from '@aws-amplify/api-graphql';