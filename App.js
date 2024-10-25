import React from 'react';
import {  Text, ScrollView, Image } from 'react-native';
import Boat from "./components/Boat";

const  AllBoat =() => {

    return (
        <ScrollView>
            <Text></Text>
            <Text></Text>
            <Text>GetABoat - ForSale</Text>
            <Boat Name="Doctor Sleep" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away"
                  icon_name="ship" poster={require("./img/sea_ray.jpg")} />

            <Boat Name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others"
                  icon_name="ship" poster={require("./img/four_winns.jpg")} />

            <Boat Name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  icon_name="ship" poster={require("./img/flipper.jpg")} />

            <Boat Name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                  icon_name="ship" poster={require("./img/princess.jpg")} />

            <Boat Name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  icon_name="ship" poster={require("./img/bayliner.jpg")} />

            <Boat Name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit"
                  icon_name="ship" poster={require("./img/fairline.jpg")} />
        </ScrollView>
    );

}

export default AllBoat;

