let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;

const product = [{
        id: 1,
        time: "4/22",
        from: " | 台灣動物協會官網",
        tag: "肥胖",
        tag2: "飲食",
        title: "找出造成貓狗肥胖的壞習慣",
        image: "./images/Column/columnAll01.svg",
        content: "肥胖是寵物主人和獸醫越來越擔心的問題。 與我們相比，狗和貓的生活我們認為是短暫的（平....",
        read: "閱讀全文",
        link: "./Column3.html",
    },
    {
        id: 2,
        time: "7/2",
        from: " | 聯信獸醫師-楊醫師",
        tag: "寵物過敏",
        tag2: "無穀飼料",
        title: "吃無穀飼料就不會過敏嗎？",
        image: "./images/Column/columnAll02.svg",
        content: "很多毛孩都有皮膚紅腫、抓個不停的過敏現象，常看到網路上大力吹捧「無穀飼料」是過敏毛孩救星。但，吃了無穀飼料就真的不會過敏了嗎？....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 3,
        time: "5/6",
        from: " | 派樂獸醫師-吳醫師",
        tag: "狗",
        tag2: "配方飼料",
        title: "【飲食療法開箱】太鹹、鮮食都NG！",
        image: "./images/Column/columnAll03.svg",
        content: "狗狗心臟病需要正確的營養由於心臟病無法根治，因此狗狗所攝取的食物對於疾病控制來說十分重要；除了遵從獸醫師醫囑外，還可以透過攝取....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 4,
        time: "3/9",
        from: " | 派樂獸醫師-陳醫師",
        tag: "蛋白質",
        tag2: "保健議題",
        title: "寵物對蛋白質的需求",
        image: "./images/Column/columnAll04.svg",
        content: "了解寵物的蛋白質需求動物對蛋白質的需求，主要是源自於對必需胺基酸的需求。藉由吃下足夠的必需胺基酸，動物能合成其他非必需胺基酸....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 5,
        time: "5/2",
        from: " | 欣欣獸醫師-吳醫師",
        tag: "泌尿道",
        tag2: "結石",
        title: "犬貓泌尿道結石原因及種類",
        image: "./images/Column/columnAll05.svg",
        content: "泌尿道結石疾病為犬貓常見的疾病之一。其診斷與治療本身並不困難，但由於其症狀及治療方式會因結石種類....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 6,
        time: "2/2",
        from: " | 派樂特派員-小美",
        tag: "結紮",
        tag2: "體重控制",
        title: "犬貓結紮後最大的敵人-發胖",
        image: "./images/Column/columnAll06.svg",
        content: "「為什麼犬貓結紮後，餵食量沒有變多，但體重還是直線上昇」，相信這是很多人會遇到的困擾。犬貓結紮後因缺少賀爾蒙刺激，使得身體代謝速度變慢....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 7,
        time: "3/9",
        from: " | 聯信獸醫師-張醫師",
        tag: "腎臟",
        tag2: "處方飼料",
        title: "腎臟病的治療",
        image: "./images/Column/columnAll07.svg",
        content: "我們可以為家中寶貝做什麼呢?今天要來跟各位談談腎臟病的治療。前面幾篇我們討論了腎臟病各種可能的成因....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 8,
        time: "1/2",
        from: " | 寵愛獸醫師-王醫師",
        tag: "貓",
        tag2: "化毛",
        title: "愛乾淨反而患病？貓咪換季易患毛球症",
        image: "./images/Column/columnAll08.svg",
        content: "貓咪可用唾液沾濕舌頭清理毛髮，當吞入的毛髮量增多又無法排出時，就會囤積在腸胃，成為「毛球症」....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 9,
        time: "3/20",
        from: " | 派樂獸醫師-陳醫師",
        tag: "牙周病",
        tag2: "口臭",
        title: "毛孩有口臭並不是理所當然，該重視口腔保健了！",
        image: "./images/Column/columnAll09.svg",
        content: "根據資料統計：3歲以上的狗狗大多數都罹患牙周病，比率高達5成！你家的毛孩可能隨時也會成為其中一員！毛孩也有牙齒，當然需要好好照顧口腔....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 10,
        time: "5/6",
        from: " | 聯信獸醫師-宋醫師",
        tag: "飼料",
        tag2: "減重",
        title: "飼料包裝上的成分表、建議餵食量有看沒懂？",
        image: "./images/Column/columnAll10.svg",
        content: "每當面對貨架上琳琅滿目的飼料，你是否也覺得眼花撩亂、不知所措了呢？其實只要掌握幾個訣竅....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 11,
        time: "5/14",
        from: " | 寵愛獸醫師-王醫師",
        tag: "貓",
        tag2: "飼料",
        title: "貓能吃狗飼料嗎？",
        image: "./images/Column/columnAll11.svg",
        content: "在美國，狗以前是最受歡迎的寵物，但是時代的改變，貓也成為了許多家庭中生活的一份子．更有些家庭同時飼養了貓與狗....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 12,
        time: "5/20",
        from: " | 派樂獸醫師-陳醫師",
        tag: "心臟",
        tag2: "骨關節炎",
        title: "邁入樂齡期，及早做好4大疾病準備",
        image: "./images/Column/columnAll12.svg",
        content: "有一種速度是人類永遠無法超越毛孩的，那就是牠們變老的速度；只要年紀漸長，動物的器官機能就會逐漸出現漸進、不可逆的退化....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 13,
        time: "3/10",
        from: " | 聯信獸醫師-張醫師",
        tag: "腎臟",
        tag2: "腎衰竭",
        title: "犬貓腎臟病症狀及診斷方式",
        image: "./images/Column/columnAll13.svg",
        content: "我們要如何知道家中寶貝是否有腎臟問題、真的遇上時又可以做些什麼呢?我們每年帶家中寶貝到動物醫院做例行的疫苗....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 14,
        time: "2/2",
        from: " | 派樂特派員-聒聒",
        tag: "結紮",
        tag2: "結石",
        title: "犬貓結紮後所產生的心理及生理的變化",
        image: "./images/Column/columnAll14.svg",
        content: "犬貓結紮後所產生的心理及生理的變化 犬貓結紮在民間及政府相關機構大力鼓吹下，比例逐年上升，結紮的好處在網路上隨便 google 一下....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 15,
        time: "11/2",
        from: " | 聯信獸醫師-宋醫師",
        tag: "糖尿病",
        tag2: "飲食",
        title: "淺談貓狗糖尿病的臨床治療與飲食重點",
        image: "./images/Column/columnAll15.svg",
        content: "糖尿病已經不再是專屬於人類的常見內分泌疾病。以統計來說，約70%患有糖尿病的貓狗年齡都超過....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 16,
        time: "12/24",
        from: " | 寵愛獸醫師-王醫師",
        tag: "泌尿道",
        tag2: "處方飼料",
        title: "泌尿道結石飼主經常詢問的問題",
        image: "./images/Column/columnAll16.svg",
        content: "泌尿道處方飼料應該終生使用嗎?如果想換成一般飼料或是自行烹煮鮮食，應該注意哪些事項?在國內，獸醫師....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 17,
        time: "5/1",
        from: " | 欣欣獸醫師-吳醫師",
        tag: "泌尿道",
        tag2: "處方飼料",
        title: "犬貓泌尿道結石症狀及治療方式",
        image: "./images/Column/columnAll17.svg",
        content: "臨床症狀 患有尿路結石的動物，可能出現以下幾種症狀： l   頻尿(相較於平常) l   每一次的排尿量減少.....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 18,
        time: "1/10",
        from: " | 派樂獸醫師-陳醫師",
        tag: "腎臟",
        tag2: "腎衰竭",
        title: "寵物腎臟疾病原因及種類",
        image: "./images/Column/columnAll18.svg",
        content: "腎臟疾病是許多貓咪都會遇到的問題。隨著年紀增加，遇上腎臟相關疾病的風險更大幅增加。雖然疾病的發生仍會因為不同族群有所差異....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 19,
        time: "5/20",
        from: " | 欣欣獸醫師-張醫師",
        tag: "癌症",
        tag2: "保健品",
        title: "毛孩罹癌不要怕，積極治療與照護降低復發率！",
        image: "./images/Column/columnAll19.svg",
        content: "當家中毛孩被宣告罹癌（腫瘤）時，相信那種心情比什麼都要難受；好在隨著科技的進步及醫療品質的提升....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 20,
        time: "3/10",
        from: " | 派樂獸醫師-胡醫師",
        tag: "腎臟",
        tag2: "保健品",
        title: "腎臟衰退一去不復返！",
        image: "./images/Column/columnAll20.svg",
        content: "慢性腎臟病，顧名思義就是悄悄、緩慢發生的腎臟疾病，因此疾病初期幾乎沒有症狀，以至於不容易察覺到。雖然「預防勝於治療」這句....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 21,
        time: "3/15",
        from: " | 派樂特派員-QQ",
        tag: "肥胖",
        tag2: "結紮",
        title: "你認為你對狗和貓的肥胖有所了解嗎？",
        image: "./images/Column/columnAll21.svg",
        content: "肥胖狗和貓肥胖是世界上最普遍的疾病之一，這適用於人類及其寵物。....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 22,
        time: "1/3",
        from: " | 寵愛獸醫師-王醫師",
        tag: "貓",
        tag2: "嘔吐",
        title: "貓咪常嘔吐嗎？從嘔吐物看出隱含的健康問題",
        image: "./images/Column/columnAll22.svg",
        content: "貓咪天生的嘔吐機制較發達，是為了在自然的環境中，吃到異物時可以透過嘔吐排除，是種本能的自我保護機制....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 23,
        time: "3/28",
        from: " | 法米納原廠官網",
        tag: "肥胖",
        tag2: "運動",
        title: "身體活動在控制動物肥胖中的作用",
        image: "./images/Column/columnAll23.svg",
        content: "肥胖會對寵物的健康產生嚴重影響。糖尿病，關節問題，心臟和呼吸是最令人擔憂的....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 24,
        time: "8/2",
        from: " | 派樂特派員-貝貝",
        tag: "遛狗",
        tag2: "胸背帶",
        title: "不同種狗狗牽繩介紹",
        image: "./images/Column/columnAll24.svg",
        content: "有些爸媽會認為家裡的狗狗很乖不會隨便亂跑，或是覺得繫上牽繩可能....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 25,
        time: "1/1",
        from: " | 派樂特派員-阿純",
        tag: "代遛",
        tag2: "遛狗",
        title: "下雨天也不怕！「狗狗專用雨傘」狗奴必備Dogbrella你有了嗎？",
        image: "./images/Column/columnAll25.svg",
        content: "遛狗當中隱藏的商機，三種“代遛狗”模式，哪一種可成功？來自洛杉磯的企業....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 26,
        time: "7/2",
        from: " | 派樂特派員-小娟",
        tag: "遛狗",
        tag2: "散步",
        title: "破除迷思系列：散步對狗狗來說只是消耗體力？",
        image: "./images/Column/columnAll26.svg",
        content: "照顧毛孩子的健康是我們的使命只要一拿出牽繩，狗狗就會興奮得狂跳，究竟為什麼狗狗....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 27,
        time: "4/6",
        from: " | 派樂特派員-阿純",
        tag: "代遛",
        tag2: "遛狗",
        title: "超神「代客遛狗」服務，20隻狗狗燦笑大合照，每天都嗨到像是校外教學！",
        image: "./images/Column/columnAll27.svg",
        content: "身為主人的你想多多陪伴毛孩，卻總是公務纏身，沒辦法和牠一起出門散步嗎？....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
    {
        id: 28,
        time: "10/28",
        from: " | 派樂特派員-小娟",
        tag: "住宿",
        tag2: "美容",
        title: "<寵物美容▪台中北屯>Woof Pet沃夫寵物生活館♡經驗分享",
        image: "./images/Column/columnAll28.svg",
        content: "Oct 28 Mon 2019 <寵物美容▪台中北屯>Woof Pet沃夫寵物生活館♥♡♥經驗分享....",
        read: "閱讀全文",
        link: "./Column4.html",
    },
]

let productArr = [];
let showAdd = false;

const addBookBtn = document.getElementById('add');
const name = document.getElementById('name');
const imgLink = document.getElementById('imgLink');
const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
    if (imgLink.value !== '' && name.value !== '') {
        productArr.push({
            id: product.length + 1,
            image: imgLink.value,
            title: name.value
        })
    }
});


function highlightText() {
    const title = document.querySelectorAll('.content__product__item h3');
    title.forEach((title, index) => {
        let titleText = title.innerHTML;
        let indexOf = Number(titleText.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()));
        let searchTextLength = searchText.value.length;
        titleText = titleText.substring(0, indexOf) + "<span class='highlight'>" + titleText.substring(indexOf, indexOf + searchTextLength) + "</span>" + titleText.substring(indexOf + searchTextLength, titleText.length);
        title.innerHTML = titleText;
        console.log(titleText);
    })
}


productArr = product;


const pageConfig = document.querySelector('.page-config select');
const mySelect = document.getElementById('mySelect');
const countTotalPage = document.querySelector('.total-page');
const countTotalProduct = document.querySelector('.total-item');

let totalPages = Math.ceil(productArr.length / perPage);
const searchText = document.querySelector('.content__search input');
const searchBtn = document.getElementById('search');


function initRender(productAr, totalPage) {
    renderProduct(productAr);
    renderListPage(totalPage);
}

initRender(productArr, totalPages);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
}

const deleteBtn = document.querySelectorAll('.content__product__item .delete');

deleteBtn.forEach((item, index) => {
    deleteBtn[index].addEventListener('click', () => {
        product.splice(index, 1);
        productArr = product;
        renderProduct(productArr)
    });
});

getCurrentPage(1);

searchBtn.addEventListener('click', () => {
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        if (item.title.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()) != -1) {
            productArr.push(item);
        }
    });
    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
});

searchText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

addBookBtn.addEventListener('click', () => {
    showAdd = !showAdd;
    if (showAdd) {
        $('.add-book').css('display', 'flex');
    } else {
        $('.add-book').css('display', 'none');
    }
})


pageConfig.addEventListener('change', () => {
    idPage = 1;
    perPage = Number(pageConfig.value);
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    if (totalPages == 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    changePage();
});



function renderProduct(product) {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="n_column_circle_wrap">';
            html += '<div class="n_column_circle">' + item.time + '</div>';
            html += '<div class="n_button2_wrap">';
            html += '<div class="n_from">' + item.from + '</div>';

            html += '<button class="n_label" style="margin-right:5px;">' + item.tag + '</button>';
            html += '<button class="n_label">' + item.tag2 + '</button>';
            html += '</div>';
            html += '</div>';
            html += '<div class="content__product__item">';
            html += '<div class="n_allTitle">' + item.title + '</div>';
            html += '<a>';
            html += '<img src=' + item.image + '>';
            html += '</a>';
            html += '<div class="n_content">' + item.content + '</div>';

            html += '<div class=" n_hot_readMore_wrap">';
            html += '<a class="n_readA" href=' + item.link + '>';
            html += '<button class="n_all_readMore" >' + item.read + '</button>';
            html += '</a>'
            html += '</div>';
            html += '</div>';
            return html;
        }
    });
    document.getElementById('product').innerHTML = html;
    highlightText();
}

function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage() {
    const idPages = document.querySelectorAll('.number-page li');
    const a = document.querySelectorAll('.number-page li a');
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.classList.add('active');
            if (value > 1 && value < idPages.length) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                $('.btn-next').addClass('btn-active');
                $('.btn-prev').removeClass('btn-active');
            }
            idPage = value;
            getCurrentPage(idPage);
            renderProduct(productArr);
        };
    }
}

changePage();

$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    console.log(idPage);
    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});