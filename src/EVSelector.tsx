/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useEffect, useState } from "react";
import React, { SafeAreaView, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {
  getMakeModels,
  getModelYears,
  getYearTrims,
  translations,
} from "./helpers";
import {
  CarMake,
  CarModelsType,
  CarYearsType,
  ComponentInputItems,
  evMakes,
  SupportedLangues,
} from "./types/evData";

type PackageDropDownTypes = {
  disabled?: boolean;
  listMode?: "MODAL" | "SCROLLVIEW";
  onValueChange: (p: any) => void;
  onCarMakeOpen?: () => void;
  onCarMakeClose?: () => void;
  onCarModelOpen?: () => void;
  onCarModelClose?: () => void;
  onCarYearOpen?: () => void;
  onCarYearClose?: () => void;
  onCarTrimOpen?: () => void;
  onCarTrimClose?: () => void;
  accessibilityLabel?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  fontColor?: ColorValue;
  backgroundColor?: string;
  minHeight?: number;
  borderColor?: ColorValue;
  language?: SupportedLangues;
  labelColor?: ColorValue;
  labelFontSize?: TextStyle["fontSize"];
  labelFontWeight?: TextStyle["fontWeight"];
};

const EVSelector = (x: PackageDropDownTypes) => {
  const {
    disabled,
    listMode,
    onCarMakeOpen,
    placeholder,
    fontColor,
    onCarMakeClose,
    onCarModelOpen,
    onCarModelClose,
    onValueChange,
    accessibilityLabel,
    width,
    backgroundColor,
    minHeight,
    borderColor,
    onCarTrimOpen,
    onCarTrimClose,
    onCarYearOpen,
    onCarYearClose,
    language,
    labelColor,
    labelFontSize,
  } = x;

  const [componentItems, setComponentItems] = useState<ComponentInputItems>({
    carTrims: [],
    carYears: [],
    carModels: [],
  });
  const [carModel, setCarModel] = useState<CarModelsType>("none");
  const [carMake, setCarMake] = useState<CarMake>("Others");
  const [carYear, setCarYear] = useState<CarYearsType>("none");
  const [carTrim, setCarTrim] = useState<CarYearsType>("none");
  const { carTrims, carYears, carModels } = componentItems;
  const [openStates, setOpenStates] = useState({
    carMakeOpen: false,
    carModelOpen: false,
    carYearOpen: false,
    carTrimOpen: false,
  });
  const { carMakeOpen, carModelOpen, carTrimOpen, carYearOpen } = openStates;

  //

  useEffect(() => {
    const CarItem = {
      carMake: carMake,
      carModel: carModel,
      carYear: carYear,
      carTrim: carTrim,
    };
    const returnedCarModels = getMakeModels({ carMake: carMake });
    setComponentItems((e) => ({ ...e, carModels: returnedCarModels }));
    onValueChange(CarItem);
  }, [carMake, carModel, carYear, carTrim]);
  useEffect(() => {
    const CarItem = {
      carMake: carMake,
      carModel: carModel,
      carYear: carYear,
      carTrim: carTrim,
    };
    const returnedCarModels = getMakeModels({ carMake: carMake });
    setComponentItems((e) => ({ ...e, carModels: returnedCarModels }));
    onValueChange(CarItem);
  }, [carMake]);

  useEffect(() => {
    const CarItem = {
      carMake: carMake,
      carModel: carModel,
      carYear: carYear,
      carTrim: carTrim,
    };
    const carModelYears = getModelYears({
      make: carMake,
      model: carModel,
    });
    setComponentItems((e) => ({ ...e, carYears: carModelYears }));
    onValueChange(CarItem);
  }, [carModel]);

  useEffect(() => {
    const CarItem = {
      carMake: carMake,
      carModel: carModel,
      carYear: carYear,
      carTrim: carTrim,
    };
    const yearTrims = getYearTrims({
      carMake: carMake as CarMake,
      carModel: carModel as CarModelsType,
      carYear: carYear,
    });
    setComponentItems((e) => ({ ...e, carTrims: yearTrims }));
    onValueChange(CarItem);
  }, [carYear]);

  const {
    carMake: carMakeText,
    carTrim: carTrimText,
    carYear: carYearText,
    carModel: carModelText,
  } = translations({ language: language ?? "en" });

  const toggleCarMake = () => {
    setComponentItems((e) => ({
      ...e,
      carModels: [],
      carYears: [],
      carTrims: [],
    }));
    setOpenStates((e) => ({ ...e, carMakeOpen: !e.carMakeOpen }));
  };
  const toggleCarModel = () => {
    setOpenStates((e) => ({ ...e, carModelOpen: !e.carModelOpen }));
  };
  const toggleCarYear = () => {
    setOpenStates((e) => ({ ...e, carYearOpen: !e.carYearOpen }));
  };
  const toggleCarTrim = () => {
    setOpenStates((e) => ({ ...e, carTrimOpen: !e.carTrimOpen }));
  };

  return (
    <SafeAreaView
      accessibilityLabel={accessibilityLabel}
      style={{ zIndex: 10 }}
    >
      <View>
        <Text
          style={{
            fontSize: labelFontSize ?? 18,
            fontWeight: "bold",
            color: labelColor,
            marginVertical: 10,
          }}
        >
          {carMakeText}
        </Text>
        <DropDownPicker
          disabled={disabled}
          listMode={listMode ? "MODAL" : "SCROLLVIEW"}
          onOpen={onCarMakeOpen}
          onClose={onCarMakeClose}
          open={carMakeOpen}
          closeAfterSelecting
          value={carMake}
          items={evMakes}
          setOpen={toggleCarMake}
          setValue={setCarMake}
          containerStyle={{
            width: width ?? "75%",
            maxWidth: "100%",
          }}
          style={{
            backgroundColor,
            paddingVertical: 2,
            minHeight: minHeight ?? 24,
            elevation: 10,
            borderRadius: 5,
            borderColor,
          }}
          textStyle={{
            color: fontColor,
          }}
          placeholder={placeholder}
        />
      </View>

      <View
        style={{
          zIndex: -1,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: labelFontSize ?? 18,
            fontWeight: "bold",
            color: labelColor,
          }}
        >
          {carModelText}
        </Text>
        <DropDownPicker
          disabled={disabled}
          listMode={listMode ? "MODAL" : "SCROLLVIEW"}
          onOpen={onCarModelOpen}
          onClose={onCarModelClose}
          open={carModelOpen}
          closeAfterSelecting
          value={carModel}
          items={carModels}
          setOpen={toggleCarModel}
          setValue={setCarModel}
          containerStyle={{
            width: width ?? "75%",
            maxWidth: "100%",
          }}
          style={{
            backgroundColor,
            paddingVertical: 2,
            minHeight: minHeight ?? 24,
            elevation: 10,
            borderRadius: 5,
            borderColor,
          }}
          textStyle={{
            color: fontColor,
          }}
          placeholder={placeholder}
        />
      </View>
      <View
        style={{
          zIndex: -2,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: labelFontSize ?? 18,
            fontWeight: "bold",
            color: labelColor,
          }}
        >
          {carYearText}
        </Text>
        <DropDownPicker
          disabled={disabled}
          listMode={listMode ? "MODAL" : "SCROLLVIEW"}
          onOpen={onCarYearOpen}
          onClose={onCarYearClose}
          open={carYearOpen}
          closeAfterSelecting
          value={carYear}
          items={carYears}
          setOpen={toggleCarYear}
          setValue={setCarYear}
          containerStyle={{
            width: width ?? "75%",
            maxWidth: "100%",
          }}
          style={{
            backgroundColor,
            paddingVertical: 2,
            minHeight: minHeight ?? 24,
            elevation: 10,
            borderRadius: 5,
            borderColor,
          }}
          textStyle={{
            color: fontColor,
          }}
          placeholder={placeholder}
        />
      </View>

      <View
        style={{
          zIndex: -3,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: labelFontSize ?? 18,
            fontWeight: "bold",
            color: labelColor,
          }}
        >
          {carTrimText}
        </Text>
        <DropDownPicker
          disabled={disabled}
          listMode={listMode ? "MODAL" : "SCROLLVIEW"}
          onOpen={onCarTrimOpen}
          onClose={onCarTrimClose}
          open={carTrimOpen}
          closeAfterSelecting
          value={carTrim}
          items={carTrims}
          setOpen={toggleCarTrim}
          setValue={setCarTrim}
          containerStyle={{
            width: width ?? "75%",
            maxWidth: "100%",
          }}
          style={{
            backgroundColor,
            paddingVertical: 2,
            minHeight: minHeight ?? 24,
            elevation: 10,
            borderRadius: 5,
            borderColor,
          }}
          textStyle={{
            color: fontColor,
          }}
          placeholder={placeholder}
        />
      </View>
    </SafeAreaView>
  );
};

export default EVSelector;
