FROM 791762661746.dkr.ecr.ap-southeast-1.amazonaws.com/prod-indochat-nginx:latest

## 將整個目錄掛載上去
ADD . /node
WORKDIR /node
ARG BUILD_NODE_ENV
ENV NODE_ENV ${BUILD_NODE_ENV}
RUN npm install && npm run build && mkdir -p -m 0666 /node/nginx-caches

## 複製 nginx 設定檔
ADD confs/nginx.conf /nginx-conf/confs/main.conf
ADD shells/run.sh /

## 啟動
CMD /run.sh
