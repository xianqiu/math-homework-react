service_path="/Users/qiuxian/PycharmProjects/mathhs"

# 编译前端
npm run build

# 判断 service_path 是否有效
if [ -d "${service_path}" ] 
then
    echo ">> Deploying ..."
    # 把前端页面放到服务端的web文件夹下
    cp -avx build/* ${service_path}/web
    echo ">> Done."
else
    echo ">> Fail. ${service_path} does not exist!"
fi

# 把更新推送到仓库
echo ">> Uploading the complied web pages ..."
cd ${service_path}
git add .
git commit -m "update"
git push origin main
cd ..
echo ">> Done."
