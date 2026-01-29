import { Suspense } from 'react';
import ProjectDetails from '../../../components/project/ProjectDetails';

const Page = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectDetails />
            </Suspense>
        </div>
    );
}

export default Page;
