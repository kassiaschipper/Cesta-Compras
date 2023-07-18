import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "../Cesta/compomentes/Topo";
import Detalhes from "./compomentes/Detalhes";

export default function Cesta({topo, detalhes}) {
  return (
    <>
     <Topo {...topo}/>
      <View style={estilos.cesta}>
      <Detalhes {...detalhes}/>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
 
});