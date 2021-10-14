import {
  IonAvatar,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRow,
  IonText,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { clipboard, clipboardOutline, notifications, notificationsOutline, settings, settingsOutline, chatbubble, chatbubbleOutline, personCircleOutline, busOutline, bus, personCircle } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'TABLERO',
    url: '/page/Inbox',
    iosIcon: clipboard,
    mdIcon: clipboardOutline
  },
  {
    title: 'PERFIL',
    url: '/page/Outbox',
    iosIcon: personCircle,
    mdIcon: personCircleOutline
  },
  {
    title: 'SERVICIOS',
    url: '/page/Favorites',
    iosIcon: chatbubble,
    mdIcon: chatbubbleOutline
  },
  {
    title: 'NOTIFICACIONES',
    url: '/page/Archived',
    iosIcon: notifications,
    mdIcon: notificationsOutline
  },
  /* No encontre un icono mas parecido a un camión */
  {
    title: 'VEHÍCULO',
    url: '/page/Trash',
    iosIcon: bus,
    mdIcon: busOutline
  },
  {
    title: 'AYUDA',
    url: '/page/Spam',
    iosIcon: settings,
    mdIcon: settingsOutline
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader class="center-items">
            <IonIcon ios="arrowBack" md="arrowcBackOutline"></IonIcon>
            <IonAvatar class="h-50 w-50"><img src="https://images.mediotiempo.com/-LRq2YjqT0LKNJGt6eXTY8zfFvs=/958x596/uploads/media/2021/09/10/el-trabajo-de-trailero-es.jpg"></img></IonAvatar>
          </IonListHeader>
          <IonText>Username</IonText><br/>
          <IonText >cliente/chofer</IonText>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
