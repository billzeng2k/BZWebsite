var bg1, bg2, aug = null, augList = [], stageTxt, currentScreen = '', currentColor = 'black', section = [], curSection;

window.onload = function () {
    bg1 = document.getElementById('bg1');
    bg2 = document.getElementById('bg2');
    stageTxt = document.getElementById('stage_subtext');
    augList['game'] = document.getElementById('aug_game');
    augList['work'] = document.getElementById('aug_work');
    augList['school'] = document.getElementById('aug_school');
    augList['hobbies'] = document.getElementById('aug_hobbies');
    augList['lol'] = document.getElementById('aug_lol');
    section['game'] = createElements(games);
    section['work'] = createElements(jobs);
    section['school'] = createElements(education);
    section['hobbies'] = createElements(hobbies);
    section['lol'] = createElements(lol);
}

function changeTo(screen, str, color) {
    if (screen === currentScreen)
        return;
    currentScreen = screen;
    reset();
    currentColor = color;
    bg1.classList.add('radial_gradient_' + color);
    bg1.classList.add('fade_in');
    bg2.classList.add('fade_out');
    augList[screen].classList.add('fade_in');
    augList[screen].classList.remove('fade_out');
    if (aug !== null) {
        aug.classList.remove('fade_in');
        aug.classList.add('fade_out');
    }
    aug = augList[screen];
    bg2 = swap(bg1, bg1 = bg2);
    type(str);
    if(curSection !== undefined)
        curSection.style.display = 'none';
    section[screen].style.display = 'block';
    curSection = section[screen];
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function swap(obj) {
    return obj;
}

function type(str) {
    stageTxt.innerHTML = str;
}

function reset() {
    bg1.classList.remove('radial_gradient_' + currentColor);
    bg1.classList.remove('fade_out');
    bg2.classList.remove('fade_in');
}

function createElements(section) {
    let container = document.createElement("DIV");
    container.style.width = '100%';
    container.style.display = 'none';
    section.forEach(element => {
        if (element.type === "entry")
            container.appendChild(createEntry(element.image, element.title, element.subtitle, element.description, element.href, element.blurb));
        else
            container.appendChild(createDivider(element.title));
    });
    document.body.appendChild(container);
    return container;
}

function createEntry(image, title, subtitle, description, href, blurb) {
    let entry = document.createElement("DIV");
    let entry_header = document.createElement("DIV");
    let entry_image = document.createElement("IMG");
    let entry_title = document.createElement("DIV");
    let entry_subtitle = document.createElement("DIV");
    let entry_text = document.createElement("DIV");
    let entry_href = document.createElement("A");
    let entry_blurb = document.createElement("DIV");
    let entry_div = document.createElement("DIV");
    entry.classList.add('entry');
    entry_header.classList.add('entry_header');
    entry_image.classList.add('entry_image');
    entry_title.classList.add('entry_title');
    entry_subtitle.classList.add('entry_subtitle');
    entry_text.classList.add('entry_text');
    entry_blurb.classList.add('entry_blurb');
    entry_image.src = image;
    entry_title.innerHTML = title;
    entry_subtitle.innerHTML = subtitle;
    entry_text.innerHTML = description;
    entry_href.href = href;
    entry_blurb.innerHTML = blurb;
    if(image !== undefined)
        entry_header.appendChild(entry_image);
    entry_div.appendChild(entry_title);
    if(blurb !== undefined)
        entry_div.append(entry_blurb);
    entry_header.appendChild(entry_div);
    entry_header.appendChild(entry_subtitle);
    entry.appendChild(entry_header);
    entry.appendChild(entry_text);
    if(href !== undefined) {
        entry_href.appendChild(entry);
        return entry_href;
    }
    return entry; 
}

function createDivider(title) {
    let divider = document.createElement("DIV");
    divider.classList.add('entry_divider');
    divider.innerHTML = title;
    return divider; 
}