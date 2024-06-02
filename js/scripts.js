const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch_track"),
    stateSelectToggle: document.querySelector(".state-select-toggle"),
    selectOptions: document.querySelectorAll(".state-select-list_item"),
    selectList: document.querySelector(".state-select-list"),
    selectToggleIcon: document.querySelector(".state-select-toggle_icon"),
    selectSearchBox: document.querySelector(".state-select-list_search"),
    selectStateSelected: document.querySelector(".state-select-toggle_state-selected"),
    confirmed: document.querySelector(".info_total--confirmed"),
    deaths: document.querySelector(".info_total--deaths"),
    deathsDescription: document.querySelector(".data-box_description"),
    vaccinated1: document.querySelector(".info_total--vaccinated-1"),
    vaccinated2: document.querySelector(".info_total--vaccinated-2"),
}

const _data = {
    id: "brasil=true",
    vaccinatedInfo: undefined,
    vaccinated: undefined,
    confirmed: undefined,
    deaths: undefined,
}

const _charts = {};

_elements.switch.addEventListener("click", () => {
    const isDark = _elements.switch.classList.toggle("switch_track--dark");
    if(isDark)
    document.documentElement.setAttribute("data-theme","dark");
    else
    document.documentElement.setAttribute("data-theme","light");
});

_elements.stateSelectToggle.addEventListener("click", () => {
    _elements.selectToggleIcon.classList.toggle("state-select-toggle_icon--rotate");
    _elements.selectList.classList.toggle("state-select-list--show")

});

_elements.selectOptions.forEach(item => {
    item.addEventListener("click", () => {
        _elements.selectStateSelected.innerText = item.innerText;
        _data.id = item.getAttribute("data-id");
        _elements.stateSelectToggle.dispatchEvent(new Event("click"));
    });
});

_elements.selectSearchBox.addEventListener("keyup", (e) => {

});

const request = (api, id) => {

}

const loadData = (id) => {

}

const createBasicChart = (element, config) => {

}

const createDonutChart = (element) => {

}

const createStackedColumnsChart = (element) => {

}

const createCharts = () => {

}

const updateCards = () => {

}

const updateCharts = () => {

}

const getChartOptions = (series, labels, colors) => {

}

const getDonutChartOptions = (value, name, colors) => {

}

loadData(_data.id);
createCharts();