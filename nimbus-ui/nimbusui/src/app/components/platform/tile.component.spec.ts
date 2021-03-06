'use strict';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule, GrowlModule, MessagesModule, DialogModule, AccordionModule, 
    DataTableModule, FileUploadModule, PickListModule, ListboxModule, CheckboxModule, 
    RadioButtonModule, CalendarModule, TreeTableModule, InputSwitchModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KeyFilterModule } from 'primeng/keyfilter';
import { JL } from 'jsnlog';
import { StorageServiceModule, SESSION_STORAGE } from 'angular-webstorage-service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {ToastModule} from 'primeng/toast';
import { Component, Input, Output, ViewChild, EventEmitter, ViewChildren } from '@angular/core';

import { Tile } from './tile.component';
import { MessageComponent } from './message/message.component';
import { Header } from './content/header.component';
import { Section } from './section.component';
import { Modal } from './modal/modal.component';
import { CardDetailsGrid } from '../platform/card/card-details-grid.component';
import { CardDetailsComponent } from '../platform/card/card-details.component';
import { Paragraph } from '../platform/content/paragraph.component';
import { StaticText } from '../platform/content/static-content.component';
import { Form } from '../platform/form.component';
import { Link } from '../platform/link.component';
import { Menu } from '../platform/menu.component';
// import { InfiniteScrollGrid } from '../platform/grid/grid.component';
// import { Button } from '../platform/form/elements/button.component';
import { ButtonGroup } from '../platform/form/elements/button-group.component';
import { InputText } from '../platform/form/elements/textbox.component';
import { ComboBox } from '../platform/form/elements/combobox.component';
import { TooltipComponent } from '../platform/tooltip/tooltip.component';
import { CardDetailsFieldComponent } from '../platform/card/card-details-field.component';
import { FrmGroupCmp } from './form-group.component';
import { Accordion } from '../platform/content/accordion.component';
import { ActionDropdown } from '../platform/form/elements/action-dropdown.component';
import { DateTimeFormatPipe } from '../../pipes/date.pipe';
import { SelectItemPipe } from '../../pipes/select-item.pipe';
import { InPlaceEditorComponent } from '../platform/form/elements/inplace-editor.component';
import { TextArea } from '../platform/form/elements/textarea.component';
import { FormElement } from './form-element.component';
import { ActionLink } from '../platform/form/elements/action-dropdown.component';
import { FileUploadComponent } from '../platform/fileupload/file-upload.component';
import { OrderablePickList } from '../platform/form/elements/picklist.component';
import { MultiselectCard } from '../platform/form/elements/multi-select-card.component';
import { MultiSelectListBox } from '../platform/form/elements/multi-select-listbox.component';
import { CheckBox } from '../platform/form/elements/checkbox.component';
import { CheckBoxGroup } from '../platform/form/elements/checkbox-group.component';
import { RadioButton } from '../platform/form/elements/radio.component';
import { Calendar } from '../platform/form/elements/calendar.component';
// import { DateControl } from '../platform/form/elements/date.component';
import { Signature } from '../platform/form/elements/signature.component'
import { PageService } from '../../services/page.service';
import { CustomHttpClient } from '../../services/httpclient.service';
import { LoaderService } from '../../services/loader.service';
import { ConfigService } from '../../services/config.service';
import { DataTable } from './grid/table.component';
import { LoggerService } from '../../services/logger.service';
import { SessionStoreService, CUSTOM_STORAGE } from '../../services/session.store';
import { AppInitService } from '../../services/app.init.service';
import { HeaderCheckBox } from '../platform/form/elements/header-checkbox.component';
import { SvgComponent } from './svg/svg.component';
import { Image } from './image.component';
import { InputLabel } from '../platform/form/elements/input-label.component';
import { Label } from '../platform/content/label.component';
import { TreeGrid } from '../platform/tree-grid/tree-grid.component';
import { InputSwitch } from '../platform/form/elements/input-switch.component';
import { CardDetailsFieldGroupComponent } from '../platform/card/card-details-field-group.component';
import { DisplayValueDirective } from '../../directives/display-value.directive';
import { FormGridFiller } from '../platform/form/form-grid-filler.component';
import { InputLegend } from '../platform/form/elements/input-legend.component';
import { setup, TestContext } from './../../setup.spec';
import { configureTestSuite } from 'ng-bullet';
import * as data from '../../payload.json';
import { Param } from '../../shared/param-state';
import { FormErrorMessage } from './form-error-message.component';
import { PrintDirective } from '../../directives/print.directive';

let pageService, param: Param;;

class MockPageService {
    processEvent() {

    }
}

@Component({
    template: '<div></div>',
    selector: 'nm-button'
  })
  class Button {
  
    @Input() element: any;
    @Input() payload: string;
    @Input() form: any;
    @Input() actionTray?: boolean;
  
    @Output() buttonClickEvent = new EventEmitter();
  
    @Output() elementChange = new EventEmitter();
    private imagesPath: string;
    private btnClass: string;
    private disabled: boolean;
    files: any;
    differ: any;
    componentTypes;
  }

class MockLoggerService {
    debug() { }
    info() { }
    error() { }
}

const declarations = [
    Tile,
    MessageComponent,
    Header,
    Section,
    Modal,
    CardDetailsGrid,
    CardDetailsComponent,
    Paragraph,
    StaticText,
    Form,
    Link,
    Menu,
    // InfiniteScrollGrid,
    Button,
    ButtonGroup,
    InputText,
    ComboBox,
    TooltipComponent,
    CardDetailsFieldComponent,
    FrmGroupCmp,
    Accordion,
    ActionDropdown,
    DateTimeFormatPipe,
    SelectItemPipe,
    InPlaceEditorComponent,
    TextArea,
    FormElement,
    ActionLink,
    FileUploadComponent,
    OrderablePickList,
    MultiselectCard,
    MultiSelectListBox,
    CheckBox,
    CheckBoxGroup,
    RadioButton,
    Calendar,
    // DateControl,
    Signature,
    DataTable,
    HeaderCheckBox,
    SvgComponent,
    Image,
    InputLabel,
    Label,
    TreeGrid,
    InputSwitch,
    CardDetailsFieldGroupComponent,
    DisplayValueDirective,
    FormGridFiller,
    InputLegend,
    FormErrorMessage,
    PrintDirective
   ];
const imports = [
    FormsModule,
    GrowlModule,
    MessagesModule,
    DialogModule,
    ReactiveFormsModule,
    AccordionModule,
    DataTableModule,
    DropdownModule,
    FileUploadModule,
    PickListModule,
    ListboxModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    HttpModule,
    HttpClientTestingModule,
    TableModule,
    KeyFilterModule,
    StorageServiceModule,
    AngularSvgIconModule,
    ToastModule,
    TreeTableModule, 
    InputSwitchModule
   ];
const providers = [
    {provide: PageService, useClass: MockPageService},
    { provide: 'JSNLOG', useValue: JL },
    { provide: CUSTOM_STORAGE, useExisting: SESSION_STORAGE },
    {provide: LoggerService, useClass: MockLoggerService},
    CustomHttpClient,
    LoaderService,
    ConfigService,
    AppInitService
   ];

let fixture, hostComponent;

describe('Tile', () => {

    configureTestSuite(() => {
        setup( declarations, imports, providers);
    });
    
    let payload = '{\"activeValidationGroups\":[], \"config\":{\"code\":\"firstName\",\"desc\":{\"help\":\"firstName\",\"hint\":\"firstName\",\"label\":\"firstName\"},\"validation\":{\"constraints\":[{\"name\":\"NotNull\",\"value\":null,\"attribute\":{\"groups\": []}}]},\"values\":[],\"uiNatures\":[],\"enabled\":true,\"visible\":true,\"uiStyles\":{\"isLink\":false,\"isHidden\":false,\"name\":\"ViewConfig.TextBox\",\"value\":null,\"attributes\":{\"hidden\":false,\"readOnly\":false,\"alias\":\"TextBox\",\"labelClass\":\"anthem-label\",\"type\":\"text\",\"postEventOnChange\":false,\"controlId\":\"\"}},\"postEvent\":false},\"type\":{\"nested\":true,\"name\":\"string\",\"collection\":false,\"model\": {"\params\":[{\"activeValidationGroups\":[], \"config\":{\"code\":\"nestedName\",\"desc\":{\"help\":\"nestedName\",\"hint\":\"nestedName\",\"label\":\"nestedName\"},\"validation\":{\"constraints\":[{\"name\":\"NotNull\",\"value\":null,\"attribute\":{\"groups\": []}}]},\"values\":[],\"uiNatures\":[],\"enabled\":true,\"visible\":true,\"uiStyles\":{\"isLink\":false,\"isHidden\":false,\"name\":\"ViewConfig.TextBox\",\"value\":null,\"attributes\":{\"hidden\":false,\"readOnly\":false,\"alias\":\"TextBox\",\"labelClass\":\"anthem-label\",\"type\":\"text\",\"postEventOnChange\":false,\"controlId\":\"\"}},\"postEvent\":false},\"type\":{\"nested\":false,\"name\":\"string\",\"collection\":false},\"leafState\":\"testData\",\"path\":\"/page/memberSearch/memberSearch/memberSearch/nestedName\"}]}},\"leafState\":\"testData\",\"path\":\"/page/memberSearch/memberSearch/memberSearch/firstName\"}';
    let param: Param = JSON.parse(payload);
  
    beforeEach(() => {
        fixture = TestBed.createComponent(Tile);
        hostComponent = fixture.debugElement.componentInstance;
        hostComponent.element = param;
        pageService = TestBed.get(PageService);
    });

    it('should create the Tile',  async(() => {
        expect(hostComponent).toBeTruthy();
    }));

    // it('based on the xSmall size the styleWd and styleHt should be updated',  () => {
    //     fixture.whenStable().then(() => {
    //         hostComponent.element.config.uiStyles.attributes.size = 'XSmall';
    //         hostComponent.element.config.initializeComponent = () => { return false };
    //         hostComponent.ngOnInit();
    //         expect(hostComponent.styleWd).toEqual('card-holder col-lg-3 col-md-6 XsmallCard');
    //         expect(hostComponent.styleHt).toEqual('height-md');
    //     });
    // });

    // it('based on the small size the styleWd and styleHt should be updated',  () => {
    //     fixture.whenStable().then(() => {
    //         hostComponent.element.config.uiStyles.attributes.size = 'Small';
    //         hostComponent.element.config.initializeComponent = () => { return false };
    //         hostComponent.ngOnInit();
    //         expect(hostComponent.styleWd).toEqual('col-lg-4 col-md-6 smallCard');
    //         expect(hostComponent.styleHt).toEqual('height-md');
    //     });
    // });

    // it('based on the medium size the styleWd and styleHt should be updated',  () => {
    //     fixture.whenStable().then(() => {
    //         hostComponent.element.config.uiStyles.attributes.size = 'Medium';
    //         hostComponent.element.config.initializeComponent = () => { return false };
    //         hostComponent.ngOnInit();
    //         expect(hostComponent.styleWd).toEqual('card-holder col-md-6 mediumCard');
    //         expect(hostComponent.styleHt).toEqual('height-md');
    //     });
    // });

    // it('based on the colorBox size the styleWd and styleHt should be updated',  () => {
    //     fixture.whenStable().then(() => {
    //         hostComponent.element.config.uiStyles.attributes.size = 'Colorbox';
    //         hostComponent.element.config.initializeComponent = () => { return false };
    //         hostComponent.ngOnInit();
    //         expect(hostComponent.styleWd).toEqual('');
    //         expect(hostComponent.styleHt).toEqual('');
    //     });
    // });

    // it('based on the size the styleWd and styleHt should be updated',  () => {
    //     fixture.whenStable().then(() => {
    //         hostComponent.element.config.uiStyles.attributes.size = '';
    //         hostComponent.element.config.initializeComponent = () => { return false };
    //         hostComponent.ngOnInit();
    //         expect(hostComponent.styleWd).toEqual('');
    //         expect(hostComponent.styleHt).toEqual('');
    //     });
    // });

    // it('ngOnInit() should update the styleWd',  () => {
    //     fixture.whenStable().then(() => {
    //         hostComponent.element.config.uiStyles.attributes.size = '';
    //         hostComponent.element.config.initializeComponent = () => { return false };
    //         hostComponent.tileType = 'subcard';
    //         hostComponent.ngOnInit();
    //         expect(hostComponent.styleWd).toEqual(' subcard');
    //     });
    // });

    // it('ngOnInit() should call the pageService.processEvent',  () => {
    //     fixture.whenStable().then(() => {
    //         hostComponent.element.config.uiStyles.attributes.size = '';
    //         hostComponent.element.config.initializeComponent = () => { return true };
    //         spyOn(pageService, 'processEvent').and.callThrough();
    //         hostComponent.ngOnInit();
    //         expect(pageService.processEvent).toHaveBeenCalled();
    //     });
    // });

});