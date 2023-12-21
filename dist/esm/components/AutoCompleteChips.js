import React, { useEffect, useState } from 'react';
export const AutoCompleteChips = ({ Data, listOnClick, chipDeleteOnClick, chipsData = [], width = 20, height = 2, borderRadius = 5, borderWidth = 1, borderColor = 'black', chipBgColor = 'gray', chipTextColor = 'black', chipfontSize = 18, chipMargin = 1, crossFillColor = 'black', }) => {
    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (chipsData && chipsData.length > 0) {
            setChips(chipsData);
        }
    }, [chipsData]);
    useEffect(() => {
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
    return (React.createElement("div", { style: container, className: 'container' },
        React.createElement("div", { className: 'chipcontainer' }, chips.map((chip, index) => (React.createElement("div", { style: chipsubdiv, className: 'chipsubdiv', key: index },
            React.createElement("span", { className: 'chip' }, chip.label),
            React.createElement("svg", { style: { fill: crossFillColor }, onClick: () => {
                    const updatedChips = chips.filter((v) => v.id !== chip.id);
                    setChips(updatedChips);
                    chipDeleteOnClick(chip);
                }, xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '15', height: '15', viewBox: '0 0 30 30' },
                React.createElement("path", { d: "M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" })))))),
        React.createElement("input", { style: textinput, className: 'textinput', type: 'text', value: inputValue, onChange: (e) => setInputValue(e.target.value) }),
        inputValue.trim() !== '' && (filteredData.map((e) => (React.createElement("p", { className: 'dropdown', key: e.id, onClick: () => {
                if (!chips.some((v) => v.id === e.id)) {
                    setChips((prevChips) => [...prevChips, { label: e.label, id: e.id }]);
                }
                setInputValue('');
                listOnClick(e);
            } }, e.label))))));
};
AutoCompleteChips.defaultProps = {
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