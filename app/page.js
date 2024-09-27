import PageHeader from "./_components/PageHeading/PageHeader";
import { designData, states } from "./_lib/data";
import Button from "./_components/Button";
import StatesList from "./_components/StatesList";

export default function ProductVariantPage() {
	return (
		<div className="space-y-4">
			<PageHeader title="Rules creation">
				<Button type="primary">Publish Feed</Button>
			</PageHeader>
			<StatesList designData={designData} statesData={states} />
		</div>
	);
}
