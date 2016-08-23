/*!
 *   chatbox UI
 *   Author: Zander Wong (wzd@cn.gree.com)
 *   Organization: EWPE Information Technology Ltd;
 *   Depart: Computer Management Centre
 *   Website: 珠海艾维普信息技术有限公司 <http://ewpe.com.cn/>
 *   Website: 珠海格力电器股份有限公司 <http://www.gree.com/>
!*/

$(document).ready(function() {

    var msg_AutoReplyTemp = '<div class="direct-chat-msg"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left"></span><span class="direct-chat-timestamp pull-right"></span></div><div class="direct-chat-text"></div></div>';
    var msg_sendMsgTemp = '<div class="direct-chat-msg right"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-right"></span> <span class="direct-chat-timestamp pull-left"></span></div><div class="direct-chat-text"></div></div>';

    $('.input-group-btn button').click(function() {
        var input = $(this).parents("span").siblings('input[type=text]');
        if (input.val() != '') {
            sendmsg('You', 'dist/img/user1-128x128.jpg', input.val(), true);
        }
    });

    $('.input-group input').keypress(function(e) {
        if (e.which == 13) {
            if ($(this).val() != '') {
                sendmsg('You', 'dist/img/user1-128x128.jpg', $(this).val(), true);
            }
        }
    });

    var i = 0;

    function sendmsg(name, img, msg, clear, r) {
        i = i + 1;
        var inner = $('#chat-messages-inner');
        var time = moment().format('DD MMM hh:mm a');
        var id = 'msg-' + i;
        var idname = name.replace(' ', '-').toLowerCase();
        if (r) {

            inner.append('<div id="' + id + '" class="direct-chat-msg"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left">' + name + '</span> <span class="direct-chat-timestamp pull-right">' + time + '</span></div><img class="direct-chat-img" src="' + img + '" alt="Message User Image" />' + '<div class="direct-chat-text">' + msg + '</div></div><br>');
        } else {
            inner.append('<div id="' + id + '" class="direct-chat-msg right"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-right">' + name + '</span> <span class="direct-chat-timestamp pull-left">' + time + '</span></div><img class="direct-chat-img" src="' + img + '" alt="Message User Image" />' + '<div class="direct-chat-text">' + msg + '</div></div><br>');

        }

        $('#' + id).hide().fadeIn(800);
        if (clear) {
            $('.input-group input').val('').focus();
        }
        $('#chat-messages').animate({
            scrollTop: inner.height()
        }, 1000);
    }
    // TOTO:customerService AutoReply
    setTimeout(function() {
        sendmsg('Sarah', 'dist/img/user3-128x128.jpg', 'Hi! This is Customer Service. What can I help you?', false, true)
    }, '600');
});
