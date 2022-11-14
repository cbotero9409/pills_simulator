var div_index, main_new, nav_new, nav_caps, nav_sizes, nav_appearance, nav_colors, nav_custom, nav_result, type1, type2, nav_cap_text, btn_type, type_text_1, type_text_2, caps_info_1;
var caps_type, capsule_type, caps_sizes, img_size_1, nav_sizes_text, capsule_size, btn_size, caps_app, capsule_colors, one_color, two_colors, btn_1color, btn_2colors, one_opac_1, one_opac_2, one_opac_3;
var nav_app_text, capsule_one_opacity, btn_app, two_opac_body_1, two_opac_body_2, two_opac_body_3, two_opac_cap_1, two_opac_cap_2, two_opac_cap_3, capsule_opacity_body, capsule_opacity_cap;
var caps_colors, one_color_div, two_colors_div, btn_colors, caps_custom, capsule_body_print_type, custom_body_text, custom_body_img, capsule_cap_print_type, custom_cap_text, custom_cap_img;
var capsule_body_img_text, capsule_cap_img_text, capsule_cap_img_input, capsule_body_img_input, capsule_description, body_result, cap_result, your_cap, capsule_one_color, capsule_body_color, capsule_cap_color;
var capsule_body_text_input, capsule_cap_text_input, capsule_body_text_color, capsule_cap_text_color, capsule_cap_print_orientation, capsule_body_print_orientation, link_size, link_app, link_colors, link_custom, link_result;
var cap_cap = false;
var cap_body = false;
var body_color = false;
var body_cap = false;

$(document).ready(function () {
    div_index = document.getElementById('div_index');
    main_new = document.getElementById('main_new');
    nav_new = document.getElementById('nav_new');
    nav_caps = document.getElementById('nav_caps');
    nav_sizes = document.getElementById('nav_sizes');
    nav_appearance = document.getElementById('nav_appearance');
    nav_colors = document.getElementById('nav_colors');
    nav_custom = document.getElementById('nav_custom');
    nav_result = document.getElementById('nav_result');
    type1 = document.getElementById('type1');
    type2 = document.getElementById('type2');
    nav_cap_text = document.getElementById('nav_cap_text');
    btn_type = document.getElementById('btn_type');
    type_text_1 = document.getElementById('type_text_1');
    type_text_2 = document.getElementById('type_text_2');
    caps_info_1 = document.getElementById('caps_info_1');
    caps_type = document.getElementById('caps_type');
    capsule_type = document.getElementById('capsule_type');
    caps_sizes = document.getElementById('caps_sizes');
    img_size_1 = document.getElementById('img_size_1');
    nav_sizes_text = document.getElementById('nav_sizes_text');
    capsule_size = document.getElementById('capsule_size');
    btn_size = document.getElementById('btn_size');
    caps_app = document.getElementById('caps_app');
    capsule_colors = document.getElementById('capsule_colors');
    one_color = document.getElementById('one_color');
    two_colors = document.getElementById('two_colors');
    btn_1color = document.getElementById('btn_1color');
    btn_2colors = document.getElementById('btn_2colors');
    one_opac_1 = document.getElementById('one_opac_1');
    one_opac_2 = document.getElementById('one_opac_2');
    one_opac_3 = document.getElementById('one_opac_3');
    nav_app_text = document.getElementById('nav_app_text');
    capsule_one_opacity = document.getElementById('capsule_one_opacity');
    two_opac_body_1 = document.getElementById('two_opac_body_1');
    two_opac_body_2 = document.getElementById('two_opac_body_2');
    two_opac_body_3 = document.getElementById('two_opac_body_3');
    two_opac_cap_1 = document.getElementById('two_opac_cap_1');
    two_opac_cap_2 = document.getElementById('two_opac_cap_2');
    two_opac_cap_3 = document.getElementById('two_opac_cap_3');
    btn_app = document.getElementById('btn_app');
    capsule_opacity_body = document.getElementById('capsule_opacity_body');
    capsule_opacity_cap = document.getElementById('capsule_opacity_cap');
    caps_colors = document.getElementById('caps_colors');
    one_color_div = document.getElementById('one_color_div');
    two_colors_div = document.getElementById('two_colors_div');
    btn_colors = document.getElementById('btn_colors');
    caps_custom = document.getElementById('caps_custom');
    capsule_body_print_type = document.getElementById('capsule_body_print_type');
    custom_body_text = document.getElementById('custom_body_text');
    custom_body_img = document.getElementById('custom_body_img');
    capsule_cap_print_type = document.getElementById('capsule_cap_print_type');
    custom_cap_text = document.getElementById('custom_cap_text');
    custom_cap_img = document.getElementById('custom_cap_img');
    capsule_body_img_text = document.getElementById('capsule_body_img_text');
    capsule_cap_img_text = document.getElementById('capsule_cap_img_text');
    capsule_body_img_input = document.getElementById('capsule_body_img_input');
    capsule_cap_img_input = document.getElementById('capsule_cap_img_input');
    capsule_description = document.getElementById('capsule_description');
    body_result = document.getElementById('body_result');
    cap_result = document.getElementById('cap_result');
    your_cap = document.getElementById('your_cap');
    capsule_one_color = document.getElementById('capsule_one_color');
    capsule_body_color = document.getElementById('capsule_body_color');
    capsule_cap_color = document.getElementById('capsule_cap_color');
    capsule_body_text_color = document.getElementById('capsule_body_text_color');
    capsule_cap_text_color = document.getElementById('capsule_cap_text_color');
    capsule_body_print_orientation = document.getElementById('capsule_body_print_orientation');
    capsule_body_print_orientation.value = 'Axial';
    capsule_cap_print_orientation = document.getElementById('capsule_cap_print_orientation');
    capsule_cap_print_orientation.value = 'Axial';
    capsule_body_text_input = document.getElementById('capsule_body_text_input');
    capsule_cap_text_input = document.getElementById('capsule_cap_text_input');
    link_size = document.getElementById('link_size');
    link_app = document.getElementById('link_app');
    link_colors = document.getElementById('link_colors');
    link_custom = document.getElementById('link_custom');
    link_result = document.getElementById('link_result');
});

function newCapsule() {
    nav_caps.classList.add('active');
    caps_type.classList.remove('d-none');
    clearType();
    clearSize();
    clearApp();
}

function capType() {
    nav_caps.classList.add('active');
    caps_type.classList.remove('d-none');
}

function newProject() {
    clearType();
    clearSize();
    clearApp();
    capType();
}

function selectType(type) {
    type1.classList.remove('type_active');
    type2.classList.remove('type_active');
    type_text_1.classList.remove('type_text_active');
    type_text_2.classList.remove('type_text_active');
    switch (type) {
        case 1:
            type1.classList.add('type_active');
            type_text_1.classList.add('type_text_active');
            nav_cap_text.innerHTML = 'Coni-Snap';
            capsule_type.value = 'Coni-Snap';
            break;
        case 2:
            type2.classList.add('type_active');
            type_text_2.classList.add('type_text_active');
            nav_cap_text.innerHTML = 'Coni-Snap Sprinkle';
            capsule_type.value = 'Coni-Snap Sprinkle';
            break;
    }
    btn_type.classList.remove('d-none');
}

function showInfo(info) {
    caps_type.classList.add('d-none');
    switch (info) {
        case 1:
            caps_info_1.classList.remove('d-none');
            break;
    }
}

function closeInfo() {
    caps_info_1.classList.add('d-none');
    caps_type.classList.remove('d-none');
}

function continueSize() {
    caps_type.classList.add('d-none');
    caps_sizes.classList.remove('d-none');
    nav_caps.classList.remove('active');
    nav_sizes.classList.add('active');
    link_size.classList.remove('disabled');
}

function selectSize(size) {
    img_size_1.src = 'assets/img/capsule_1.png';
    $(".selected_col").removeClass("selected_col");
    var size_col = document.getElementsByClassName(`size${size}`);
    switch (size) {
        case 1:
            img_size_1.src = 'assets/img/capsule_2.png';
            nav_sizes_text.innerHTML = 'Tamaño 000el';
            capsule_size.value = '000el';
            for (var i = 0; i < size_col.length; i++) {
                size_col[i].classList.add('selected_col');
            }
            break;
    }
    btn_size.classList.remove('d-none');
}

function continueApp() {
    caps_sizes.classList.add('d-none');
    caps_app.classList.remove('d-none');
    nav_sizes.classList.remove('active');
    nav_appearance.classList.add('active');
    link_app.classList.remove('disabled');
}

function appOptions(option) {
    btn_1color.classList.remove('type_active');
    btn_2colors.classList.remove('type_active');
    one_opac_1.classList.remove('type_active');
    one_opac_2.classList.remove('type_active');
    one_opac_3.classList.remove('type_active');
    two_opac_body_1.classList.remove('type_active');
    two_opac_body_2.classList.remove('type_active');
    two_opac_body_3.classList.remove('type_active');
    two_opac_cap_1.classList.remove('type_active');
    two_opac_cap_2.classList.remove('type_active');
    two_opac_cap_3.classList.remove('type_active');
    btn_app.classList.add('d-none');
    nav_app_text.innerHTML = 'Apariencia';
    capsule_one_opacity.value = '';
    capsule_opacity_body.value = '';
    capsule_opacity_cap.value = '';
    cap_cap = false;
    cap_body = false;
    switch (option) {
        case 1:
            capsule_colors.value = '1 Color';
            one_color.classList.remove('d-none');
            two_colors.classList.add('d-none');
            btn_1color.classList.add('type_active');
            break;
        case 2:
            capsule_colors.value = '2 Colores';
            two_colors.classList.remove('d-none');
            one_color.classList.add('d-none');
            btn_2colors.classList.add('type_active');
            break;
    }
    clearColors();
    clearCustom();
    clearResult();
}

function selectOneOpacity(opacity) {
    one_opac_1.classList.remove('type_active');
    one_opac_2.classList.remove('type_active');
    one_opac_3.classList.remove('type_active');
    switch (opacity) {
        case 1:
            one_opac_1.classList.add('type_active');
            nav_app_text.innerHTML = '1 Color (OP)';
            capsule_one_opacity.value = 'Opaco';
            break;
        case 2:
            one_opac_2.classList.add('type_active');
            nav_app_text.innerHTML = '1 Color (TR)';
            capsule_one_opacity.value = 'Transparente';
            break;
        case 3:
            one_opac_3.classList.add('type_active');
            nav_app_text.innerHTML = '1 Color (IR)';
            capsule_one_opacity.value = 'Iridiscencia';
            break;
    }
    btn_app.classList.remove('d-none');
}

function selectTwoOpacity(option) {
    if (option < 4) {
        two_opac_body_1.classList.remove('type_active');
        two_opac_body_2.classList.remove('type_active');
        two_opac_body_3.classList.remove('type_active');
        switch (option) {
            case 1:
                two_opac_body_1.classList.add('type_active');
                two_opac_cap_2.disabled = true;
                if (capsule_opacity_cap.value == 'Transparente') {
                    cap_cap = false;
                    capsule_opacity_cap.value = '';
                    two_opac_cap_2.classList.remove('type_active');
                }
                capsule_opacity_body.value = 'Opaco';
                break;
            case 2:
                two_opac_body_2.classList.add('type_active');
                two_opac_cap_2.disabled = false;
                capsule_opacity_body.value = 'Transparente';
                break;
            case 3:
                two_opac_body_3.classList.add('type_active');
                two_opac_cap_2.disabled = true;
                if (capsule_opacity_cap.value == 'Transparente') {
                    cap_cap = false;
                    capsule_opacity_cap.value = '';
                    two_opac_cap_2.classList.remove('type_active');
                }
                capsule_opacity_body.value = 'Iridiscencia';
                break;
        }
        cap_body = true;
    } else {
        two_opac_cap_1.classList.remove('type_active');
        two_opac_cap_2.classList.remove('type_active');
        two_opac_cap_3.classList.remove('type_active');
        switch (option) {
            case 4:
                two_opac_cap_1.classList.add('type_active');
                two_opac_body_1.disabled = false;
                two_opac_body_3.disabled = false;
                capsule_opacity_cap.value = 'Opaco';
                break;
            case 5:
                two_opac_cap_2.classList.add('type_active');
                two_opac_body_1.disabled = true;
                two_opac_body_3.disabled = true;
                if (capsule_opacity_body.value == 'Opaco' || capsule_opacity_body.value == 'Iridiscencia') {
                    cap_body = false;
                    capsule_opacity_body.value = '';
                    two_opac_body_1.classList.remove('type_active');
                    two_opac_body_3.classList.remove('type_active');
                }
                capsule_opacity_cap.value = 'Transparente';
                break;
            case 6:
                two_opac_cap_3.classList.add('type_active');
                two_opac_body_1.disabled = false;
                two_opac_body_3.disabled = false;
                capsule_opacity_cap.value = 'Iridiscencia';
                break;
        }
        cap_cap = true;
    }
    if (cap_body && cap_cap) {
        btn_app.classList.remove('d-none');
        var body_format = capsule_opacity_body.value.substring(0, 2).toUpperCase();
        var cap_format = capsule_opacity_cap.value.substring(0, 2).toUpperCase();
        nav_app_text.innerHTML = `2 Colores (${body_format} / ${cap_format})`;
    }
}

function continueColors() {
    caps_app.classList.add('d-none');
    caps_colors.classList.remove('d-none');
    nav_appearance.classList.remove('active');
    nav_colors.classList.add('active');
    link_colors.classList.remove('disabled');
    if (capsule_colors.value == '1 Color') {
        one_color_div.classList.remove('d-none');
        two_colors_div.classList.add('d-none');
    } else if (capsule_colors.value == '2 Colores') {
        two_colors_div.classList.remove('d-none');
        one_color_div.classList.add('d-none');
    }
}

function selectOneColor() {
    btn_colors.classList.remove('d-none');
}

function selectTwoColors(option) {
    if (option == 1) {
        body_color = true;
    } else if (option == 2) {
        cap_color = true;
    }
    if (body_color && cap_color) {
        btn_colors.classList.remove('d-none');
    }
}

function continueCustom() {
    caps_colors.classList.add('d-none');
    caps_custom.classList.remove('d-none');
    nav_colors.classList.remove('active');
    nav_custom.classList.add('active');
    link_custom.classList.remove('disabled');
}

function customBodyText() {
    custom_body_text.classList.remove('d-none');
    custom_body_img.classList.add('d-none');
    capsule_body_print_type.value = 'Texto';
}

function customBodyImg() {
    custom_body_img.classList.remove('d-none');
    custom_body_text.classList.add('d-none');
    capsule_body_print_type.value = 'Imagen';
}

function customCapText() {
    custom_cap_text.classList.remove('d-none');
    custom_cap_img.classList.add('d-none');
    capsule_cap_print_type.value = 'Texto';
}

function customCapImg() {
    custom_cap_img.classList.remove('d-none');
    custom_cap_text.classList.add('d-none');
    capsule_cap_print_type.value = 'Imagen';
}

function uploadBody(file) {
    if (file) {
        var startIndex = (file.indexOf('\\') >= 0 ? file.lastIndexOf('\\') : file.lastIndexOf('/'));
        var filename = file.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        capsule_body_img_text.innerHTML = filename;
    }
}

function uploadCap(file) {
    if (file) {
        var startIndex = (file.indexOf('\\') >= 0 ? file.lastIndexOf('\\') : file.lastIndexOf('/'));
        var filename = file.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        capsule_cap_img_text.innerHTML = filename;
    }
}

function resetBodyImg() {
    capsule_body_img_text.innerHTML = 'Seleccionar';
    capsule_cap_img_input.value = '';
}

function resetCapImg() {
    capsule_cap_img_text.innerHTML = 'Seleccionar';
    capsule_cap_img_input.value = '';
}

function selectBodyOrientation(orientation) {
    capsule_body_print_orientation.value = orientation;
}

function selectCapOrientation(orientation) {
    capsule_cap_print_orientation.value = orientation;
}

function continueResult() {
    caps_custom.classList.add('d-none');
    your_cap.classList.remove('d-none');
    nav_custom.classList.remove('active');
    nav_result.classList.add('active');
    link_result.classList.remove('disabled');
    const name = `<li>Cápsula ${capsule_type.value}</li>`;
    const size = `<li>Tamaño ${capsule_size.value}</li>`;
    const colors = `<li>${capsule_colors.value}</li>`;
    capsule_description.innerHTML = name + size + colors;
    if (capsule_colors.value == '1 Color') {
        var opacity_body = `<li>Opacidad: ${capsule_one_opacity.value}</li>`;
        var opacity_cap = `<li>Opacidad: ${capsule_one_opacity.value}</li>`;
        var body_color = `<li>Color: ${capsule_one_color.value}</li>`;
        var cap_color = `<li>Color ${capsule_one_color.value}</li>`;
    } else if (capsule_colors.value == '2 Colores') {
        var opacity_body = `<li>Opacidad: ${capsule_opacity_body.value}</li>`;
        var opacity_cap = `<li>Opacidad: ${capsule_opacity_cap.value}</li>`;
        var body_color = `<li>Color: ${capsule_body_color.value}</li>`;
        var cap_color = `<li>Color ${capsule_cap_color.value}</li>`;
    }
    if (capsule_body_print_type.value == 'Texto' && capsule_body_text_input.value !== '') {
        var body_text = `<li>Texto: ${capsule_body_text_input.value}</li>`;
        var body_text_color = `<li>Color del Texto: ${capsule_body_text_color.value}</li>`;
        var body_text_orientation = `<li>Orientación del Impreso: ${capsule_body_print_orientation.value}</li>`;
    } else {
        var body_text = '';
        var body_text_color = '';
        var body_text_orientation = '';
    }
    if (capsule_body_print_type.value == 'Imagen' && capsule_cap_img_text.innerHTML !== 'Seleccionar') {
        var body_img = `<li>Imagen: ${capsule_body_img_text.innerHTML}</li>`;
        var body_orientation = `<li>Orientación del Impreso: ${capsule_body_print_orientation.value}</li>`;
    } else {
        var body_img = '';
        var body_orientation = '';
    }
    body_result.innerHTML = opacity_body + body_color + body_text + body_text_color + body_text_orientation + body_img + body_orientation;
    if (capsule_cap_print_type.value == 'Texto' && capsule_cap_text_input.value !== '') {
        var cap_text = `<li>Texto: ${capsule_cap_text_input.value}</li>`;
        var cap_text_color = `<li>Color del Texto: ${capsule_cap_text_color.value}</li>`;
        var cap_text_orientation = `<li>Orientación del Impreso: ${capsule_cap_print_orientation.value}</li>`;
    } else {
        var cap_text = '';
        var cap_text_color = '';
        var cap_text_orientation = '';
    }
    if (capsule_cap_print_type.value == 'Imagen' && capsule_cap_img_text.innerHTML !== 'Seleccionar') {
        var cap_img = `<li>Imagen: ${capsule_cap_img_text.innerHTML}</li>`;
        var cap_orientation = `<li>Orientación del Impreso: ${capsule_cap_print_orientation.value}</li>`;
    } else {
        var cap_img = '';
        var cap_orientation = '';
    }
    cap_result.innerHTML = opacity_cap + cap_color + cap_text + cap_text_color + cap_text_orientation + cap_img + cap_orientation;
}

function clearType() {
    type1.classList.remove('type_active');
    type2.classList.remove('type_active');
    type_text_1.classList.remove('type_text_active');
    type_text_2.classList.remove('type_text_active');
    nav_cap_text.innerHTML = 'Cápsulas';
    capsule_type.value = '';
    btn_type.classList.add('d-none');
    caps_info_1.classList.add('d-none');
}

function clearSize() {
    img_size_1.src = 'assets/img/capsule_1.png';
    $(".selected_col").removeClass("selected_col");
    nav_sizes_text.innerHTML = 'Tamaños';
    capsule_size.value = '';
    btn_size.classList.add('d-none');
    caps_sizes.classList.add('d-none');
    nav_sizes.classList.remove('active');
    link_size.classList.add('disabled');
}

function clearApp() {
    appOptions(0);
    caps_app.classList.add('d-none');
    nav_appearance.classList.remove('active');
    btn_app.classList.add('d-none');
    link_app.classList.add('disabled');
    capsule_colors.value = '';
    one_color.classList.add('d-none');
    two_colors.classList.add('d-none');
}

function clearColors() {
    btn_colors.classList.add('d-none');
    caps_colors.classList.add('d-none');    
    nav_colors.classList.remove('active');
    link_colors.classList.add('disabled');
    body_color = false;
    cap_color = false;
    capsule_one_color.value = '';
    capsule_body_color.value = '';
    capsule_cap_color.value = '';
}

function clearCustom() {    
    custom_body_text.classList.add('d-none');
    custom_body_img.classList.add('d-none');
    capsule_body_print_type.value = '';
    custom_cap_text.classList.add('d-none');
    custom_cap_img.classList.add('d-none');
    capsule_cap_print_type.value = '';
    resetBodyImg();
    resetCapImg();
    capsule_body_print_orientation.value = 'Axial';
    capsule_cap_print_orientation.value = 'Axial';
    capsule_body_text_input.value = '';
    capsule_cap_text_input.value = '';
    link_custom.classList.add('disabled');
    caps_custom.classList.add('d-none');    
    nav_custom.classList.remove('active');
}

function clearResult() {    
    your_cap.classList.add('d-none');    
    nav_result.classList.remove('active');
    link_result.classList.add('disabled');
    capsule_description.innerHTML = '';
    body_result.innerHTML = '';
    cap_result.innerHTML = '';
}

function hideAll() {
    nav_caps.classList.remove('active');
    caps_type.classList.add('d-none');
    caps_info_1.classList.add('d-none');
    caps_sizes.classList.add('d-none');
    nav_sizes.classList.remove('active');
    caps_app.classList.add('d-none');
    nav_appearance.classList.remove('active');    
    caps_colors.classList.add('d-none');
    nav_colors.classList.remove('active');
    caps_custom.classList.add('d-none');
    nav_custom.classList.remove('active');
    your_cap.classList.add('d-none');
    nav_result.classList.remove('active');
}

function navBar(option) {
    hideAll();
    switch (option) {
        case 1:
            capType();
            break;
        case 2:
            continueSize();
            break;
        case 3:
            continueApp();
            break;
        case 4:
            continueColors();
            break;
        case 5:
            continueCustom();
            break;
        case 6:
            continueResult();
            break;
    }
}