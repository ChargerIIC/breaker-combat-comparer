import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import UnitCardEditable from '../components/UnitCard-Editable/UnitCard-Editable';
import { UnitStats } from '../models/UnitStats';

let unitA = new UnitStats();
let unitB = new UnitStats();

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Combat Compare</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <UnitCardEditable title="Unit A" unit={unitA} ></UnitCardEditable>
            </IonCol>
            <IonCol>
              <UnitCardEditable title="Unit B" unit={unitB}></UnitCardEditable>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
