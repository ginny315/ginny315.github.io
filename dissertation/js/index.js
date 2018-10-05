$(document).ready(function(){
    var mywork = $('#mywork'),
        teacherguide = $('#teacherguide');
    $.ajax({
        url:'data/text.json',
        success: function(data){
            var strMyWork = '',
                strGuide = '',
                    str1 = '',
                    str2 = '',
                    strTemp = '';
            data.data1.forEach(function(value){
                str1 = '<div class="component">' +
                '<div class="black-arrow-wrap">' + 
                    '<p class="black-arrow"></p> ' +
                    '<p class="black-tip">' +
                    value.date + 
                    '</p>' +
                '</div>' +
                '<div class="chart-content">' +
                    '<ul>';
                strMyWork += str1;
                str2 = '<li>Have Done:</li>';
                value.content.forEach(function(item){
                    strTemp = '<li>' + item + ';</li>';
                    str2 += strTemp;
                });
                strMyWork += str2;
                str3 = '</ul></div></div>';
                strMyWork += str3;
            });
            mywork.html(strMyWork);

            data.data2.forEach(function(value){
                str1 = '<div class="component">' +
                '<div class="black-arrow-wrap">' + 
                    '<p class="black-arrow"></p> ' +
                    '<p class="black-tip">' +
                    value.date + 
                    '</p>' +
                '</div>' +
                '<div class="chart-content">' +
                    '<ul>';
                strGuide += str1;
                str2 = '<li>👩‍🏫:</li>';
                value.content.forEach(function(item){
                    strTemp = '<li>' + item + ';</li>';
                    str2 += strTemp;
                });
                strGuide += str2;
                str3 = '</ul></div></div>';
                strGuide += str3;
            });
            teacherguide.html(strGuide);
        }
    });
});