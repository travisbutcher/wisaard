

import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";
import Header from "./Header";

interface AppParams{
  appName: string;
}

export default class App {
  constructor(params: AppParams) {
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
      </div>
    );
  }
}
