import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonInput, IonItem, IonCol } from '@ionic/react';
import React from 'react';
import { UnitStats } from '../../models/UnitStats';
import './UnitCard-Editable.css';

interface UnitCardEditableProps {
  title: string;
  unit: UnitStats;
}

const UnitCardEditable: React.FC<UnitCardEditableProps> = ({ title, unit }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{unit.name}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput type="number" value={unit.movement} placeholder="00" class="tonInput"></IonInput>
            </IonCol>
            <IonCol>
              <span> / {unit.movement*1.5}</span>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default UnitCardEditable;
