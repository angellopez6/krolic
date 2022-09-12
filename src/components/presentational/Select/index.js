import React from "react";
import Select from "react-select";
import { useTheme } from "styled-components";

function ReactSelect({ data = [], ...rest }) {
  const globalTheme = useTheme();

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: globalTheme.background,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? globalTheme.color
          : isFocused
          ? globalTheme.color
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? globalTheme.background
          : globalTheme.color
          ? isFocused
            ? globalTheme.background
            : globalTheme.color
          : undefined,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : globalTheme.color
            : undefined,
        },
      };
    },
  };

  return (
    <Select
      defaultValue={data[0]}
      options={data}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: globalTheme.color,
          primary75: globalTheme.color,
          primary50: globalTheme.color,
          danger: globalTheme.color,
          dangerLight: globalTheme.color,
          neutral: globalTheme.color,
          neutral0: globalTheme.background,
          neutral5: globalTheme.color,
          neutral10: globalTheme.color,
          neutral20: globalTheme.color,
          neutral30: globalTheme.color,
          neutral40: globalTheme.color,
          neutral50: globalTheme.color,
          neutral60: globalTheme.color,
          neutral70: globalTheme.color,
          neutral80: globalTheme.color,
          neutral90: globalTheme.color,
        },
      })}
      styles={colourStyles}
      {...rest}
    />
  );
}

export default ReactSelect;
