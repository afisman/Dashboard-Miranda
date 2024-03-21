import { render } from "@testing-library/react"
import ButtonStyled from "./buttonStyled";
import { getStyledTest } from "../../../utils/getStyledTest";
import { hexToRgb } from "../../../utils/convertHexToRgb";





describe('It checks button color', () => {
    it('Button does not have prop name', () => {
        render(
            <ButtonStyled onClick={() => { }} children={'Button'} $name={''} />
        )
        const style = getStyledTest(ButtonStyled)

        expect(style.cursor).toBe('pointer')
    })

    it('Button does have prop name danger', () => {
        render(
            <ButtonStyled onClick={() => { }} children={'Button'} $name={'danger'} />
        )
        const style = getStyledTest(ButtonStyled);
        const rgb1 = hexToRgb('#ef4111');
        const rgb2 = hexToRgb('#e4efec');
        expect(style.backgroundColor).toEqual(rgb1);
        expect(style.color).toEqual(rgb2);
    })
})