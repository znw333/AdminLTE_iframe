/*!
 * Copyright
 * ��ҳ����
 * @author zhuangnanwei
 * @version 2019-7-6
 */
+function ($) {
}(jQuery);



/*!
 * Copyright
 * ��ҳ����
 * @author zhuangnanwei
 * @version 2019-7-6
 */
var defaultForm = 'dashboard.html';     //Ĭ��ҳ
var defaultOpenStyle = 1;               //1.iframe 2.����
//��ʾ����------------------
function showMsg(msg) {
    if (msg)
        alert(msg);
}
//�л�ҳ��------------------
/**
 * ʹ��Iframe �л�
 * @param {any} url
 */
function iframeOpen(url) {
    if (url) {
        var ifr = $('#ifr', window.parent.document);
        if (ifr) ifr.attr('src', defaultForm);//�ص������˵���ѡ�� todo
        else showMsg('���쳣(����iframe)');
    }
}
/**
 * ʹ��layer �л�
 * @param {any} url
 */
function layerOpen(url) {
    if (url) {
        var ifr = $('#ifr', window.parent.document);
        if (ifr) ifr.attr('src', defaultForm);//�ص������˵���ѡ�� todo
        else showMsg('���쳣(����iframe)');
    }
}
/**
 * �л�ҳ��
 * @param {any} url
 */
function openUrl(url, openStyle) {
    if (!url || url.length < 0) {
        showMsg('��ַ�쳣');
        return false;
    }

    if (openStyle) {
        switch (openStyle) {
            case 1:
                returnMsg = iframeOpen(url);
            case 2:
                returnMsg = layerOpen(url);
        }
    }
    else {
        switch (defaultOpenStyle) {
            case 1:
                returnMsg = iframeOpen(url);
            case 2:
                returnMsg = layerOpen(url);
            default:
                returnMsg = iframeOpen(url);
        }
    }
}
//��ҳ����------------------
/**
 * ��ҳ��������
 * @param {any}
 */
function SetFormTitle() {
    console.log('SetFormTitle------------');
    var li = $('.main-sidebar .sidebar-menu li[class=active]', window.parent.document);
    if (li) $('.box-header .box-title').html($(li.find('a')).html());
}
//��ť------------------
/**
 * �ر� ���
 * 
 */
$('.frmBtnClose').click(function () {
    openUrl(defaultForm, 1);
});


//Ĭ�ϳ�ʼ������-----------
$(function () {
    SetFormTitle();
});