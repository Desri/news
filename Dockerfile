FROM 791762661746.dkr.ecr.ap-southeast-1.amazonaws.com/prod-indochat-nginx:latest

## 將整個目錄掛載上去
ADD . /node
WORKDIR /node
RUN npm install && npm run build

## 複製 nginx 設定檔
ADD confs/nginx.conf /nginx-conf/confs/main.conf
ADD shellls/run.sh /

## 啟動
CMD /run.sh
