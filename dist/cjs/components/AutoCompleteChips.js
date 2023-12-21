"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteChips = void 0;
const react_1 = __importStar(require("react"));
const AutoCompleteChips = ({ Data, listOnClick, chipDeleteOnClick, chipsData = [], width = 20, height = 2, borderRadius = 5, borderWidth = 1, borderColor = 'black', chipBgColor = 'gray', chipTextColor = 'black', chipfontSize = 18, chipMargin = 1, crossFillColor = 'black', }) => {
    const [chips, setChips] = (0, react_1.useState)([]);
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [filteredData, setFilteredData] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (chipsData && chipsData.length > 0) {
            setChips(chipsData);
        }
    }, [chipsData]);
    (0, react_1.useEffect)(() => {
        const filtered = Data.filter((e) => e.label.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredData(filtered);
    }, [inputValue, Data]);
    const container = {
        width: `${width}em`,
        padding: 0,
        margin: 0,
    };
    const textinput = {
        width: '100%',
        height: `${height}em`,
        borderRadius: `${borderRadius}px`,
        borderWidth: `${borderWidth}px`,
        borderColor,
    };
    const chipsubdiv = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '.8em',
        backgroundColor: chipBgColor,
        borderRadius: '10px',
        padding: '10px',
        margin: `${chipMargin}px`,
        color: chipTextColor,
        fontSize: `${chipfontSize}px`,
    };
    return (react_1.default.createElement("div", { style: container, className: 'container' },
        react_1.default.createElement("div", { className: 'chipcontainer' }, chips.map((chip, index) => (react_1.default.createElement("div", { style: chipsubdiv, className: 'chipsubdiv', key: index },
            react_1.default.createElement("span", { className: 'chip' }, chip.label),
            react_1.default.createElement("svg", { style: { fill: crossFillColor }, onClick: () => {
                    const updatedChips = chips.filter((v) => v.id !== chip.id);
                    setChips(updatedChips);
                    chipDeleteOnClick(chip);
                }, xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '15', height: '15', viewBox: '0 0 30 30' },
                react_1.default.createElement("path", { d: "M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" })))))),
        react_1.default.createElement("input", { style: textinput, className: 'textinput', type: 'text', value: inputValue, onChange: (e) => setInputValue(e.target.value) }),
        inputValue.trim() !== '' && (filteredData.map((e) => (react_1.default.createElement("p", { className: 'dropdown', key: e.id, onClick: () => {
                if (!chips.some((v) => v.id === e.id)) {
                    setChips((prevChips) => [...prevChips, { label: e.label, id: e.id }]);
                }
                setInputValue('');
                listOnClick(e);
            } }, e.label))))));
};
exports.AutoCompleteChips = AutoCompleteChips;
exports.AutoCompleteChips.defaultProps = {
    width: 20,
    height: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    chipBgColor: 'gray',
    chipTextColor: 'black',
    chipfontSize: 18,
    chipMargin: 1,
    crossFillColor: 'black',
};
//# sourceMappingURL=AutoCompleteChips.js.map