import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
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
          <div className="pl-4">
          <IonButton  menu-close href="/" fill="clear"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg></IonButton>
          </div>
          <div className="flex flex-wrap justify-center grid grid-rows-1">
            <IonAvatar class="h-35 w-35 m-5"><img src="https://verdes.info/wp-content/uploads/2014/05/putin-el-rey-y-el-oso-300x300.jpg"></img></IonAvatar>
          <div className="grid justify-center">
            <IonText class="text-center font-semibold">Username</IonText>
            <IonText class="text-center">cliente/chofer</IonText>
          </div>
          </div>
          
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
        <div className="flex flex-wrap justify-end">
          <IonButton className="content-end normal-case" fill="clear" shape="round" size="small">Cerrar Sesión</IonButton>
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
