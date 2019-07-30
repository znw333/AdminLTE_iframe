/******************��ҳ����*************************/


/******************��ҳ����*************************/
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
        var ifr = window.parent.document.getElementById('ifr');
        if (ifr)
            ifr.src = defaultForm;
        else
            showMsg('���쳣(����iframe)');
    }
}

/**
 * ʹ��layer �л�
 * @param {any} url
 */
function layerOpen(url) {
    if (url) {
        var ifr = window.parent.document.getElementById('ifr');
        if (ifr)
            ifr.src = defaultForm;
        else
            showMsg('���쳣(����iframe)');
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

});