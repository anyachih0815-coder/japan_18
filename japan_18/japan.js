// --- 【第 18 課完整單字庫 (依教材)】 ---
const vocabulary = [
    { kana: "できます", kanji: "", zh: "能夠、會、可以", cat: "第18課 動詞(II)" },
    { kana: "あらいます", kanji: "洗います", zh: "洗", cat: "第18課 動詞(I)" },
    { kana: "ひきます", kanji: "弾きます", zh: "彈奏 (鋼琴等)", cat: "第18課 動詞(I)" },
    { kana: "うたいます", kanji: "歌います", zh: "唱歌", cat: "第18課 動詞(I)" },
    { kana: "あつめます", kanji: "集めます", zh: "收集、收藏", cat: "第18課 動詞(II)" },
    { kana: "すてます", kanji: "捨てます", zh: "丟掉、捨棄", cat: "第18課 動詞(II)" },
    { kana: "かえます", kanji: "換えます", zh: "換、兌換", cat: "第18課 動詞(II)" },
    { kana: "うんてんします", kanji: "運転します", zh: "駕駛、開車", cat: "第18課 動詞(III)" },
    { kana: "よやくします", kanji: "予約します", zh: "預約、預訂", cat: "第18課 動詞(III)" },
    { kana: "ピアノ", kanji: "", zh: "鋼琴", cat: "第18課 名詞" },
    { kana: "～メートル", kanji: "", zh: "～公尺", cat: "第18課 量詞" },
    { kana: "げんきん", kanji: "現金", zh: "現金", cat: "第18課 名詞" },
    { kana: "しゅみ", kanji: "趣味", zh: "興趣、嗜好", cat: "第18課 名詞" },
    { kana: "にっき", kanji: "日記", zh: "日記", cat: "第18課 名詞" },
    { kana: "おいのり", kanji: "お祈り", zh: "祈禱 (~をします)", cat: "第18課 名詞" },
    { kana: "かちょう", kanji: "課長", zh: "課長、科長", cat: "第18課 名詞" },
    { kana: "ぶちょう", kanji: "部長", zh: "經理、部長", cat: "第18課 名詞" },
    { kana: "しゃちょう", kanji: "社長", zh: "總經理、社長", cat: "第18課 名詞" },
    { kana: "どうぶつ", kanji: "動物", zh: "動物", cat: "第18課 名詞" },
    { kana: "うま", kanji: "馬", zh: "馬", cat: "第18課 名詞" },
    { kana: "インターネット", kanji: "", zh: "網際網路", cat: "第18課 名詞" },
    { kana: "とくに", kanji: "特に", zh: "特別", cat: "第18課 會話副詞" },
    { kana: "へえ", kanji: "", zh: "哦 (表示欽佩、驚訝)", cat: "第18課 感嘆詞" },
    { kana: "それは おもしろいですね", kanji: "", zh: "那一定很有意思呢", cat: "第18課 會話" },
    { kana: "なかなか", kanji: "", zh: "不容易、不輕易 (後接否定)", cat: "第18課 副詞" },
    { kana: "ほんとうですか", kanji: "", zh: "真的嗎？", cat: "第18課 會話" },
    { kana: "ぜひ", kanji: "", zh: "務必、一定要", cat: "第18課 副詞" },
    { kana: "ふるさと", kanji: "故郷", zh: "故鄉、家鄉", cat: "第18課 相關單語" },
    { kana: "ビートルズ", kanji: "", zh: "披頭四樂團", cat: "第18課 相關單語" },
    { kana: "あきはばら", kanji: "秋葉原", zh: "秋葉原 (東京地名)", cat: "第18課 相關單語" }
];

// --- 【第 18 課精選文型與會話例句】 ---
const sentences = [
    { jp: "ミラーさんは 漢字を 読む ことが できます。", zh: "米勒先生會讀漢字。" },
    { jp: "わたしの 趣味は 映画を 見る ことです。", zh: "我的興趣是看電影。" },
    { jp: "寝る まえに、日記を 書きます。", zh: "睡覺之前會寫日記。" },
    { jp: "車の 運転が できますか。……はい、できます。", zh: "你會開車嗎？……是的，我會。" },
    { jp: "マリアさんは 自転車に 乗る ことが できますか。……いいえ、できません。", zh: "瑪麗亞小姐會騎腳踏車嗎？……不，不會。" },
    { jp: "大阪城は 何時まで 見学が できますか。……5時までです。", zh: "大阪城可以參觀到幾點？……到5點為止。" },
    { jp: "カードで 払う ことが できますか。……すみませんが、現金で お願いします。", zh: "可以用刷卡付款嗎？……不好意思，請付現金。" },
    { jp: "ご趣味は 何ですか。……古い 時計を 集める ことです。", zh: "您的興趣是什麼？……收集古董鐘錶。" },
    { jp: "日本の子どもは 学校に 入る まえに、ひらがなを 覚えなければ なりませんか。……いいえ、覚えなくても いいです。", zh: "日本的小孩進小學之前必須記住平假名嗎？……不，不記住也可以。" },
    { jp: "食事の まえに、この 薬を 飲んで ください。", zh: "吃飯前請吃這個藥。" },
    { jp: "サントスさんの 趣味は 何ですか。……写真です。動物の 写真です。特に 馬が 好きです。", zh: "山多斯先生的興趣是什麼？……攝影。拍動物的照片。特別喜歡馬。" },
    { jp: "日本では なかなか 馬を 見る ことが できません。……北海道に 馬が たくさん いますよ。……じゃ、夏休みに ぜひ 行きたいです。", zh: "在日本很不容易看到馬呢。……北海道有很多馬喔！……那麼，暑假務必想去看看！" }
];

// --- 【第 18 課動詞 辭書形 變化庫】 ---
const verbs = [
    { masu: "かいます (買います)", dict: "かう", group: "I 類動詞", zh: "買" },
    { masu: "かきます (書きます)", dict: "かく", group: "I 類動詞", zh: "寫" },
    { masu: "およぎます (泳ぎます)", dict: "およぐ", group: "I 類動詞", zh: "游泳" },
    { masu: "はなします (話します)", dict: "はなす", group: "I 類動詞", zh: "說話" },
    { masu: "たちます (立ちます)", dict: "たつ", group: "I 類動詞", zh: "站立" },
    { masu: "よびます (呼びます)", dict: "よぶ", group: "I 類動詞", zh: "呼叫" },
    { masu: "よみます (読みます)", dict: "よむ", group: "I 類動詞", zh: "讀" },
    { masu: "はいります (入ります)", dict: "はいる", group: "I 類動詞", zh: "進入" },
    { masu: "ねます (寝ます)", dict: "ねる", group: "II 類動詞", zh: "睡覺" },
    { masu: "たべます (食べます)", dict: "たべる", group: "II 類動詞", zh: "吃" },
    { masu: "おきます (起きます)", dict: "おきる", group: "II 類動詞", zh: "起床" },
    { masu: "みます (見ます)", dict: "みる", group: "II 類動詞", zh: "看" },
    { masu: "かります (借ります)", dict: "かりる", group: "II 類動詞", zh: "借入" },
    { masu: "きます (来ます)", dict: "くる", group: "III 類動詞", zh: "來" },
    { masu: "します", dict: "する", group: "III 類動詞", zh: "做" },
    { masu: "うんてんします (運転します)", dict: "うんてんする", group: "III 類動詞", zh: "駕駛" }
];

let vocabMode = 'jp-zh';
let currentVocabIdx = 0;
let currentSentenceIdx = 0;
let currentVerbIdx = 0;

let hwMissedQuestions = [];
let hwCurrentItem = null;

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

function switchTab(e, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function normalizeText(text) {
    if (!text) return "";
    return text.toString().trim().toLowerCase()
        .replace(/[\s\(\)\[\]（）「」\.\…\。\、\！\？\!\?ー\-]/g, '')
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
}

/* --- 1. 單字卡區塊 --- */
function setVocabMode(mode) {
    vocabMode = mode;
    renderVocabQuestion();
}

function renderVocabQuestion() {
    const item = vocabulary[currentVocabIdx];
    document.getElementById("vocab-category").innerText = item.cat;
    document.getElementById("vocab-answer-container").style.display = "none";

    if (vocabMode === 'jp-zh') {
        document.getElementById("vocab-prompt-label").innerText = "請猜出中文意思是：";
        document.getElementById("vocab-question-text").innerText = item.kana;
        document.getElementById("vocab-answer-text").innerText = item.zh;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    } else {
        document.getElementById("vocab-prompt-label").innerText = "請猜出日文唸法是：";
        document.getElementById("vocab-question-text").innerText = item.zh;
        document.getElementById("vocab-answer-text").innerText = item.kana;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    }
}

function nextVocabQuestion() {
    currentVocabIdx = (currentVocabIdx + 1) % vocabulary.length;
    renderVocabQuestion();
}

function prevVocabQuestion() {
    currentVocabIdx = (currentVocabIdx - 1 + vocabulary.length) % vocabulary.length;
    renderVocabQuestion();
}

function toggleVocabAnswer() {
    const box = document.getElementById("vocab-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakVocab() {
    speakText(vocabulary[currentVocabIdx].kana);
}

/* --- 2. 課文例句測驗 --- */
function renderSentenceQuestion() {
    const item = sentences[currentSentenceIdx];
    document.getElementById("sentence-question-text").innerText = item.zh;
    document.getElementById("sentence-answer-text").innerText = item.jp;
    document.getElementById("sentence-answer-container").style.display = "none";
}

function nextSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx + 1) % sentences.length;
    renderSentenceQuestion();
}

function prevSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx - 1 + sentences.length) % sentences.length;
    renderSentenceQuestion();
}

function toggleSentenceAnswer() {
    const box = document.getElementById("sentence-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakSentence() {
    speakText(sentences[currentSentenceIdx].jp);
}

/* --- 3. 手寫測驗 --- */
function updateHwBadge() {
    document.getElementById("hw-review-badge").innerText = `待複習錯題：${hwMissedQuestions.length}`;
}

function nextHandwritingQuestion() {
    document.getElementById("hw-user-input").value = "";
    document.getElementById("hw-feedback-container").className = "feedback-box hidden";

    if (hwMissedQuestions.length > 0 && Math.random() < 0.6) {
        hwCurrentItem = hwMissedQuestions[0];
    } else {
        hwCurrentItem = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    }

    document.getElementById("hw-category").innerText = hwCurrentItem.cat;
    document.getElementById("hw-question").innerText = hwCurrentItem.zh;
    updateHwBadge();
}

function checkHandwritingAnswer() {
    const userInput = document.getElementById("hw-user-input").value;
    if (!userInput) return alert("請先輸入答案！");

    const feedbackBox = document.getElementById("hw-feedback-container");
    feedbackBox.classList.remove("hidden");

    const cleanUser = normalizeText(userInput);
    const cleanKana = normalizeText(hwCurrentItem.kana);
    const cleanKanji = hwCurrentItem.kanji ? normalizeText(hwCurrentItem.kanji) : "";
    const isCorrect = (cleanUser === cleanKana || (cleanKanji && cleanUser === cleanKanji));

    if (isCorrect) {
        feedbackBox.className = "feedback-box correct";
        document.getElementById("hw-feedback-status").innerText = "🎉 比對正確！";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;
        
        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx !== -1) hwMissedQuestions.splice(existIdx, 1);
        speakText(hwCurrentItem.kana);
    } else {
        feedbackBox.className = "feedback-box wrong";
        document.getElementById("hw-feedback-status").innerText = "❌ 答錯了！已加入錯題佇列";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;

        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx === -1) hwMissedQuestions.push(hwCurrentItem);
    }
    updateHwBadge();
}

/* --- 4. 辭書形與句型變化區塊 --- */
function renderVerbQuestion() {
    const item = verbs[currentVerbIdx];
    document.getElementById("verb-group").innerText = item.group;
    document.getElementById("verb-masu").innerText = item.masu;
    document.getElementById("verb-meaning").innerText = `中文意思：${item.zh}`;
    
    document.getElementById("verb-ans-dict").innerText = item.dict;
    document.getElementById("verb-ans-can").innerText = `${item.dict} ことが できます`;
    document.getElementById("verb-ans-before").innerText = `${item.dict} まえに`;
    
    document.getElementById("verb-answer-container").style.display = "none";
}

function nextVerbQuestion() {
    currentVerbIdx = (currentVerbIdx + 1) % verbs.length;
    renderVerbQuestion();
}

function prevVerbQuestion() {
    currentVerbIdx = (currentVerbIdx - 1 + verbs.length) % verbs.length;
    renderVerbQuestion();
}

function toggleVerbAnswer() {
    const box = document.getElementById("verb-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakCurrentVerb() {
    speakText(verbs[currentVerbIdx].dict);
}

/* --- 5. 單字列表與搜尋 --- */
function renderTable(data) {
    const tbody = document.getElementById("word-table-body");
    tbody.innerHTML = "";
    data.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><button class="btn-sound" onclick="speakText('${item.kana}')">🔊</button></td>
            <td><strong>${item.kana}</strong></td>
            <td>${item.kanji || '-'}</td>
            <td>${item.zh}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterWords() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = vocabulary.filter(item => 
        item.kana.toLowerCase().includes(query) || 
        item.kanji.toLowerCase().includes(query) || 
        item.zh.includes(query)
    );
    renderTable(filtered);
}

window.onload = function() {
    renderVocabQuestion();
    renderSentenceQuestion();
    nextHandwritingQuestion();
    renderVerbQuestion();
    renderTable(vocabulary);
};