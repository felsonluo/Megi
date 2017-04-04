import { TabDirective } from 'ng2-bootstrap';

/**
 * tab对应的信息
 */
export class MgTab {

    outlet?: string;

    nameKey?: string;

    show?: boolean;

    disabled?: boolean;

    className?: string;

    removable?: boolean;

    url?: string;

    canRefresh?: boolean;

    index?: number;

    used?: boolean;

    tab: TabDirective;

}