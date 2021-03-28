import React from 'react';

const Key = ({name, disabled,withClassNames, isActive, setActive, removeActive, getGridSectionNameByKey}) => {

    const active = isActive(name);
    const pressHandler = () => (!disabled && (active ? removeActive(name) : setActive(name)));

    return (
        <div
            onClick={pressHandler}
            className={`key ${withClassNames ? withClassNames : ''} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''} ${getGridSectionNameByKey(name)}`}
        >{name}</div>
    )
};


export default function Keyboard ({setActiveKey, removeActiveKey, isActiveKey, showGrid = false, disabledSpace = true}) {


    const getGridSectionNameByKey = (k) => {
        const grid = {
            'section-1':['1','2','Ё','Й','Ф','Я'],
            'section-2':['3','Ц','Ы','Ч'],
            'section-3':['4','У','В','С'],
            'section-4':['5','6','К','Е','А','П','М','И',],
            'section-5':['7','Н','Г','Р','О','Т','Ь'],
            'section-6':['8','Ш','Л','Б'],
            'section-7':['9','Щ','Д','Ю'],
            'section-8':['0','-','=','З','Х','Ъ','Ж','Э','.'],
            'section-control':['Delete','Tab','CapsLock','\\','Enter','Shift','Ctrl','Alt','Space','Command'],
        };

        for(let name in grid){
            if(name && grid[name] && grid[name].includes(k) && showGrid){
                return name;
            }
        }
        return '';
    };

    return (
        <div>
            <div className="keyboard">
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ё"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"1"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"2"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"3"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"4"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"5"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"6"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"7"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"8"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"9"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"0"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"-"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"="} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Delete"} withClassNames="delete"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Tab"} withClassNames="tab"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Й"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ц"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"У"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"К"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Е"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Н"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Г"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ш"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Щ"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"З"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Х"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ъ"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"\\"} withClassNames="backslash"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"CapsLock"} withClassNames="capslock"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ф"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ы"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"В"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"А"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"П"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Р"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"О"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Л"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Д"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ж"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Э"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Enter"} withClassNames="return"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Shift"} withClassNames="leftshift"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Я"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ч"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"С"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"М"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"И"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Т"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ь"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Б"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"Ю"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} name={"."} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Shift"} withClassNames="rightshift"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Ctrl"} withClassNames="leftctrl"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Alt"}/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Command"} withClassNames="command"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={disabledSpace} name={" "} withClassNames="space"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Command"} withClassNames="command"/>
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Alt"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Ctrl"} />
                <Key isActive={isActiveKey} setActive={setActiveKey} removeActive={removeActiveKey} getGridSectionNameByKey={getGridSectionNameByKey} disabled={true} name={"Fn"} />
            </div>
        </div>
    )
};