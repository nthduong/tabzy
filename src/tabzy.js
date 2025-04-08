function Tabzy(tabsId) {
    this.container = document.querySelector(tabsId);
    this.tabs = Array.from(this.container.querySelectorAll("li a"));

    this.panels = this.tabs.map((tab) => {
        const panel = document.querySelector(tab.getAttribute("href"));
        return panel;
    });

    this._init();
}

Tabzy.prototype._init = function () {
    this._activeTab(this.tabs[0]);
    this.tabs.forEach((tab) => {
        tab.onclick = (event) => this._handleTabClick(event, tab);
    });
};

Tabzy.prototype._handleTabClick = function (event, tab) {
    event.preventDefault();

    this._activeTab(tab);
};

Tabzy.prototype._activeTab = function (tab) {
    this.tabs.forEach((tab) => {
        tab.closest("li").classList.remove("tab-active");
    });
    this.panels.forEach((panel) => {
        panel.hidden = true;
    });

    tab.closest("li").classList.add("tab-active");
    document.querySelector(tab.getAttribute("href")).hidden = false;
};

Tabzy.prototype.switch = function (input) {
    let tabToActive = null;

    tabToActive = this.tabs.find((tab) => tab.getAttribute("href") === input);

    if (!tabToActive) {
        console.error("loi");
    }
    this._activeTab(tabToActive);
};
