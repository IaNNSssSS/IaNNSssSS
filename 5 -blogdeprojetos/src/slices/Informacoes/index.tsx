import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Informacoes`.
 */
export type InformacoesProps = SliceComponentProps<Content.InformacoesSlice>;

/**
 * Component for "Informacoes" Slices.
 */
const Informacoes = ({ slice }: InformacoesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for informacoes (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Informacoes;
