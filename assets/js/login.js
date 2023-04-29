// 1. longin 添加一个点击事件
$('#link_login').click(function () {
    // 2. 此时 整个按钮的逻辑有两个
    // 3. 去注册账号的时候 让 $('.reg-box') 显示
    // 2.2 去登录的时候 让 login-box 显示
    // 2.3 获取当前按钮的内容
    let text = $(this).text().trim()
    console.log(text)
    if(text === '去注册账号'){
        // 让 $('.reg-box') 显示
        $('.reg-box').show().siblings('.login-box').hide()
        $('#link_login').html('去登录')
    } else {
        $('.login-box').show().siblings('.reg-box').hide()
        $('#link_login').html('去注册账号')
    }
})
